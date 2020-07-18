import fastify from "fastify";
import cors from "fastify-cors";
import { pipe } from "@drblaster/pipe";

import { requestFormatter, dilate, parsePort } from "./utils";
import config from "./config";
import { StocazzoRequest } from "./types";

const sticazzi = config.routes;

const server = fastify();

server.register(cors);

server.get<StocazzoRequest>("/:format", (request, reply) => {
  const {
    params: { format },
  } = request;
  const fallback = !(format && sticazzi[format]);
  const obj = fallback ? sticazzi.root : sticazzi[format];
  const response = { response: obj.value };

  const processedResponse = pipe(
    requestFormatter(request),
    dilate(request)(obj.big)
  )(response);

  reply.send(processedResponse);
});

export const init = async () => {
  await server.ready();
  return server;
};

export const start = async () => {
  const url = await server.listen(parsePort(process.env.PORT), "0.0.0.0");
  console.log(`A stocazzo provider is running at: ${url}`);
  return server;
};

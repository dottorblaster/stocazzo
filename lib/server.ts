import fastify, { FastifyInstance } from 'fastify';
import cors from 'fastify-cors';
import { pipe } from '@drblaster/pipe';

import { requestFormatter, dilate, parsePort } from './utils';
import config from './config';
import { StocazzoRequest, StocazzoResponse } from './types';

const sticazzi = config.routes;

const server = fastify();

server.register(cors);

server.get('/:format', (request: StocazzoRequest, reply) => {
  const {
    params: { format },
  } = request;
  const fallback = !(format && sticazzi[format]);
  const obj = fallback ? sticazzi.root : sticazzi[format];
  const response = { response: obj.value };

  const processedResponse: StocazzoResponse = pipe(
    requestFormatter(request),
    dilate(request)(obj.big)
  )(response);

  reply.send(processedResponse);
});

export const init = async (): Promise<FastifyInstance> => {
  await server.ready();
  return server;
};

export const start = async (): Promise<FastifyInstance> => {
  const url = await server.listen(parsePort(process.env.PORT), '0.0.0.0');
  console.log(`A stocazzo provider is running at: ${url}`);
  return server;
};

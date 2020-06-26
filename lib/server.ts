import fastify from 'fastify';
import cors from 'fastify-cors';
import { pipe } from '@drblaster/pipe';
import { requestFormatter, dilate, parsePort } from './utils';
import config from './config';

const sticazzi = config.routes;

const server = fastify();

server.register(cors);

server.get('/:format', (request, reply) => {
  const shaltFallback = !(
    request.params.format && sticazzi[request.params.format]
  );
  const obj = shaltFallback ? sticazzi.root : sticazzi[request.params.format];
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
  const url = await server.listen(parsePort(process.env.PORT));
  console.log(`A stocazzo provider is running at: ${url}`);
  return server;
};

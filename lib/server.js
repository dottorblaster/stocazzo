const Hapi = require("@hapi/hapi");
const { pipe } = require("@drblaster/pipe");
const { requestFormatter, dilate, getPort } = require("./utils");
const config = require("./config");
const sticazzi = config.routes;

const server = Hapi.server({
  port: getPort(process.env.PORT), // eslint-disable-line no-undef
  routes: { cors: true }
});

server.route({
  method: "GET",
  path: "/{format?}",
  handler: request => {
    const shaltFallback = !(
        request.params.format && sticazzi[request.params.format]
      );
    const obj = shaltFallback ? sticazzi.root : sticazzi[request.params.format];
    const response = { response: obj.value };

    const processedResponse = pipe(
      requestFormatter(request),
      dilate(request)(obj.big),
    )(response)

    return processedResponse;
  },
  config: {
    cache: {
      expiresIn: 30 * 1000,
      privacy: "private"
    }
  }
});

const init = async () => {
  await server.initialize();
  return server;
};

const start = async () => {
  await server.start();
  console.log(`A stocazzo provider is running at: ${server.info.uri}`);
  return server;
};

module.exports = { init, start };

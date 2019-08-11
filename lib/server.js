const Hapi = require("@hapi/hapi");
const { requestFormatter, dilate, getPort } = require("./utils");
const config = require("./config");
const sticazzi = config.routes;

const server = Hapi.server({
  port: getPort(process.env.PORT),
  routes: { cors: true }
});

server.route({
  method: "GET",
  path: "/{format?}",
  handler: request => {
    var shaltFallback = !(
        request.params.format && sticazzi[request.params.format]
      ),
      obj = shaltFallback ? sticazzi.root : sticazzi[request.params.format],
      r = { response: obj.value };

    requestFormatter(request, r);
    dilate(request, r, obj.big);

    return r;
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

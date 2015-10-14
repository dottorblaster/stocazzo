var Hapi = require('hapi'),
	Utils = require('./lib/utils.js'),
	config = require('./config.js'),
	server = new Hapi.Server(),
	sc = config.sc,
	sticazzi = config.routes;

server.connection({port: config.port});

server.route({
	method: 'GET',
	path: '/{format?}',
	handler: function(request, reply){
		var shaltFallback = !request.params.format && !sticazzi[request.params.format],
			obj = shaltFallback ? sticazzi.root : sticazzi[request.params.format],
			r = {response: obj.value};

		Utils.requestFormatter(request, r).dilate(request, r, obj.big);
		return reply(JSON.stringify(r)).type('application/json');
	}
});

server.start(function () {
	console.log('A stocazzo provider is running at:', server.info.uri);
});

exports.server = server;

var Hapi = require('hapi'),
	Utils = require('./lib/utils.js'),
	config = require('./config.js'),
	server = new Hapi.Server(),
	sc = config.sc,
	sticazzi = config.routes;

server.connection({
	port: config.port,
	routes: {cors: true}
});

server.route({
	method: 'GET',
	path: '/{format?}',
	handler: function(request, reply){
		var shaltFallback = !(request.params.format && sticazzi[request.params.format]),
			obj = shaltFallback ? sticazzi.root : sticazzi[request.params.format],
			r = {response: obj.value};

		Utils.requestFormatter(request, r).dilate(request, r, obj.big);
		return reply(JSON.stringify(r)).type('application/json');
	},
	config: {
		cache: {
			expiresIn: 30 * 1000,
			privacy: 'private'
		}
	}
});

server.start(function (err) {
	if (!err) {
		console.log('A stocazzo provider is running at:', server.info.uri);
	} else {
		console.log('Startup failed with error: ', err);
	}
});

exports.server = server;

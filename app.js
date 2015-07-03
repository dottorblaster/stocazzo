var Hapi = require('hapi'),
	server = new Hapi.Server(3000),
	config = require('./config.js'),
	sc = config.sc;

server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		return reply(JSON.stringify({response: sc})).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/{query}',
	handler: function(request, reply){
		return reply(JSON.stringify({query: encodeURIComponent(request.params.query) + '?', response: sc})).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/caps',
	handler: function(request, reply){
		return reply(JSON.stringify({response: sc.toUpperCase()})).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/caps/{query}',
	handler: function(request, reply){
		return reply(JSON.stringify({query: encodeURIComponent(request.params.query) + '?', response: sc.toUpperCase()})).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/camel',
	handler: function(request, reply){
		return reply(JSON.stringify({response: sc})).type('application/json');
	}
});

server.start(function () {
	console.log('A stocazzo provider is running at: ', server.info.uri);
});

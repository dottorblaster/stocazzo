var Hapi = require('hapi'),
	sc = 'stocazzo',
	server = new Hapi.Server(3000);

server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		reply(JSON.stringify({response: sc}));
	}
});

server.route({
	method: 'GET',
	path: '/{query}',
	handler: function(request, reply){
		reply(JSON.stringify({query: encodeURIComponent(request.params.query) + '?', response: sc}));
	}
});

server.route({
	method: 'GET',
	path: '/caps',
	handler: function(request, reply){
		reply(JSON.stringify({response: sc.toUpperCase()}));
	}
});

server.route({
	method: 'GET',
	path: '/caps/{query}',
	handler: function(request, reply){
		reply(JSON.stringify({query: encodeURIComponent(request.params.query) + '?', response: sc.toUpperCase()}));
	}
});

server.route({
	method: 'GET',
	path: '/camel',
	handler: function(request, reply){
		reply(JSON.stringify({response: sc}));
	}
});

server.start(function () {
	console.log('A stocazzo provider is running at: ', server.info.uri);
});

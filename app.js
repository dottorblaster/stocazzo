var Hapi = require('hapi'),
	server = new Hapi.Server(3000);

server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		reply(JSON.stringify({response: 'stocazzo'}));
	}
});

server.route({
	method: 'GET',
	path: '/{query}',
	handler: function(request, reply){
		reply(JSON.stringify({query: encodeURIComponent(request.params.query) + '?', response: 'stocazzo'}));
	}
});

server.route({
	method: 'GET',
	path: '/caps',
	handler: function(request, reply){
		reply(JSON.stringify({response: 'stocazzo'.toUpperCase()}));
	}
});

server.route({
	method: 'GET',
	path: '/caps/{query}',
	handler: function(request, reply){
		reply(JSON.stringify({query: encodeURIComponent(request.params.query) + '?', response: 'stocazzo'.toUpperCase()}));
	}
});

server.route({
	method: 'GET',
	path: '/camel',
	handler: function(request, reply){
		reply(JSON.stringify({response: 'StoCazzo'}));
	}
});

server.start(function () {
	console.log('A stocazzo provider is running at: ', server.info.uri);
});

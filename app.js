var Hapi = require('hapi'),
	server = new Hapi.Server(3000);

server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		reply('stocazzo');
	}
});

server.route({
	method: 'GET',
	path: '/caps',
	handler: function(request, reply){
		reply('stocazzo'.toUpperCase());
	}
});

server.route({
	method: 'GET',
	path: '/camel',
	handler: function(request, reply){
		reply('StoCazzo');
	}
});

server.start(function () {
	console.log('A stocazzo provider is running at: ', server.info.uri);
});

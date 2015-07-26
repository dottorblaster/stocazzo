var Hapi = require('hapi'),
	Utils = require('./lib/utils.js'),
	config = require('./config.js'),
	server = new Hapi.Server(),
	sc = config.sc;

server.connection({port: config.port});

server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		var r = {response: sc};

		r = Utils.requestFormatter(request, r);
		return reply(JSON.stringify(r)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/caps',
	handler: function(request, reply){
		var r = {response: sc.toUpperCase()};

		r = Utils.requestFormatter(request, r);
		return reply(JSON.stringify(r)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/camel',
	handler: function(request, reply){
		var r = {response: "StoCazzo"};

		r = Utils.requestFormatter(request, r);
		return reply(JSON.stringify(r)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/ascii',
	handler: function(request, reply){
		var r = {response: "8====D"};

		r = Utils.requestFormatter(request, r);
		return reply(JSON.stringify(r)).type('application/json');
	}
});

server.start(function () {
	console.log('A stocazzo provider is running at:', server.info.uri);
});

exports.server = server;

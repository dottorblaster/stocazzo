var Hapi = require('hapi'),
	Utils = require('./lib/utils.js'),
	config = require('./config.js'),
	server = new Hapi.Server(),
	sc = config.sc;

server.connection({
	port: config.port,
	routes: {cors: true}
});

server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply){
		var r = {response: sc};

		Utils.requestFormatter(request, r).dilate(request, r, 'gran');
		return reply(JSON.stringify(r)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/caps',
	handler: function(request, reply){
		var r = {response: sc.toUpperCase()};

		Utils.requestFormatter(request, r).dilate(request, r, 'GRAN');
		return reply(JSON.stringify(r)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/camel',
	handler: function(request, reply){
		var r = {response: "StoCazzo"};

		Utils.requestFormatter(request, r).dilate(request, r, 'Gran');
		return reply(JSON.stringify(r)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/ascii',
	handler: function(request, reply){
		var r = {response: "8====D"};

		Utils.requestFormatter(request, r).dilate(request, r, '===');
		return reply(JSON.stringify(r)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/underscore',
	handler: function(request, reply){
		var r = {response: "sto_cazzo"};

		Utils.requestFormatter(request, r).dilate(request, r, '_gran');
		return reply(JSON.stringify(r)).type('application/json');
	}
});

server.route({
	method: 'GET',
	path: '/sto-conte',
	handler: function(request, reply){
		var r = {response: "Sto cazzo!"};

		Utils.requestFormatter(request, r).dilate(request, r, ' gran');
		return reply(JSON.stringify(r)).type('application/json');
	}
});

server.start(function () {
	console.log('A stocazzo provider is running at:', server.info.uri);
});

exports.server = server;

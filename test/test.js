var Lab = require('lab'),
	Code = require('code'),
	server = require('../app.js').server,
	lab = exports.lab = Lab.script();

lab.experiment("Testing di stocazzo", function() {
	lab.test("GET /", function(done) {
		var options = {
			method: 'GET',
			url: '/'
		};

		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(JSON.parse(response.result).response).to.equal('stocazzo');
			done();
		});
	});

	lab.test("GET / with request body", function(done) {
		var options = {
			method: 'GET',
			url: '/',
			payload: {query: "chi è?"}
		};

		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(JSON.parse(response.result).query).to.equal('chi è?');
			Code.expect(JSON.parse(response.result).response).to.equal('stocazzo');
			done();
		});
	});

	lab.test("GET /caps", function(done) {
		var options = {
			method: 'GET',
			url: '/caps'
		};

		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(JSON.parse(response.result).response).to.equal('STOCAZZO');
			done();
		});
	});

	lab.test("GET /caps with request body", function(done) {
		var options = {
			method: 'GET',
			url: '/caps',
			payload: {query: "chi è?"}
		};

		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(JSON.parse(response.result).query).to.equal('chi è?');
			Code.expect(JSON.parse(response.result).response).to.equal('STOCAZZO');
			done();
		});
	});

	lab.test("GET /camel", function(done) {
		var options = {
			method: 'GET',
			url: '/camel'
		};

		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(JSON.parse(response.result).response).to.equal('StoCazzo');
			done();
		});
	});

	lab.test("GET /ascii", function(done) {
		var options = {
			method: 'GET',
			url: '/camel'
		};

		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(JSON.parse(response.result).response).to.equal('8====D');
			done();
		});
	});
});

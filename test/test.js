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

	lab.test("GET /chi", function(done) {
		var options = {
			method: 'GET',
			url: '/chi'
		};

		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(JSON.parse(response.result).query).to.equal('chi?');
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

	lab.test("GET /caps/chi", function(done) {
		var options = {
			method: 'GET',
			url: '/caps/chi'
		};

		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(JSON.parse(response.result).query).to.equal('chi?');
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
});

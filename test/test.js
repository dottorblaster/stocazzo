var Lab = require('lab'),
	Code = require('code'),
	server = require('../app.js').server,
	Utils = require('../lib/utils.js'),
	lab = exports.lab = Lab.script();

lab.experiment("Testing stocazzo's", function() {
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
			url: '/?q=chi%20e'
		};

		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(JSON.parse(response.result).query).to.equal('chi e?');
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
			url: '/caps?q=chi%20e'
		};

		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(JSON.parse(response.result).query).to.equal('chi e?');
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
			url: '/ascii'
		};

		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			Code.expect(JSON.parse(response.result).response).to.equal('8====D');
			done();
		});
	});

	lab.test("Utils requestFormatter() adding question mark", function(done) {
		var testReq = {query: {q: "chi è"}},
			testRes = {response: "stocazzo"};

		testRes = Utils.requestFormatter(testReq, testRes);
		Code.expect(testRes.query).to.equal('chi è?');
		done();
	});

	lab.test("Utils requestFormatter(), no question mark added", function(done) {
		var testReq = {query: {q: "chi è?"}},
			testRes = {response: "stocazzo"};

		testRes = Utils.requestFormatter(testReq, testRes);
		Code.expect(testRes.query).to.equal('chi è?');
		done();
	});
});

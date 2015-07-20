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
});

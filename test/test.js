var Lab = require('lab');
var server = require('../app.js');

Lab.experiment("Testing di stocazzo", function() {
	Lab.test("GET /", function(done) {
		var options = {
			method: 'GET',
			url: '/'
		};

		server.inject(options, function(response) {
			Lab.expect(response.statusCode).to.equal(200);
			Lab.expect(response.result.response).to.equal('stocazzo');
			done();
		});
	});

	Lab.test("GET /caps", function(done) {
		var options = {
			method: 'GET',
			url: '/caps'
		};

		server.inject(options, function(response) {
			Lab.expect(response.statusCode).to.equal(200);
			Lab.expect(response.result.response).to.equal('STOCAZZO');
			done();
		});
	});
});

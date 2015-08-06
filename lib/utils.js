var Utils = {
	requestFormatter: function(req, res) {
		if (req.query.hasOwnProperty('q')) {
			res.query = req.query.q;
			if (res.query.slice(-1) != '?') {
				res.query = res.query + '?';
			}
		}
		return this;
	},
	dilate: function(req, res, s) {
		if (req.query.hasOwnProperty('big') && req.query.big == 1) {
			res.response = res.response.substr(0, 3) + s + res.response.substr(3, 7);
		}
		return this;
	}
}

module.exports = Utils;

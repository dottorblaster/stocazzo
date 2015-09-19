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
		if (req.query.hasOwnProperty('big') && (req.query.big in s)) {
			res.response = res.response.substr(0, 3) + s[req.query.big] + res.response.substr(3, res.response.length-1);
		}
		return this;
	}
}

module.exports = Utils;

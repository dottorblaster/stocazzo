var Utils = {
	requestFormatter: function(req, res) {
		if (req.query.hasOwnProperty('q')) {
			res.query = req.query.q;
			if (res.query.slice(-1) != '?') {
				res.query = res.query + '?';
			}
		}
		return res;
	}
}

module.exports = Utils;

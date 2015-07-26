var Utils = {
	requestFormatter: function(req, res) {
		if (req.query.hasOwnProperty('q')) {
			res.query = req.query.q;
			//res.query.slice(-1) |= '?' : r.query = r.query + '?'; // future impl
		}
		return res;
	}

	//return {requestFormatter: requestFormatter}
}

module.exports = Utils;

const requestFormatter = (req) => (res) => {
  if (req.query.q) {
    res.query = req.query.q;
    if (res.query.slice(-1) != "?") {
      res.query = res.query + "?";
    }
  }
  return {...res};
};

const dilate = (req) => (s) => (res) => {
  if (req.query.big && req.query.big == 1) {
    res.response =
      res.response.substr(0, 3) +
      s +
      res.response.substr(3, res.response.length - 1);
  }
  return {...res};
};

const getPort = envPort => envPort || 3000;

module.exports = { requestFormatter, dilate, getPort };

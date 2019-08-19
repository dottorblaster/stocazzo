const requestFormatter = req => res => {
  if (req.query.q) {
    res.query = req.query.q;
    if (res.query.slice(-1) != "?") {
      res.query = res.query + "?";
    }
  }
  return { ...res };
};

const dilate = req => s => res => {
  const { response } = res;

  return req.query.big == 1
    ? {
        ...res,
        response: `${response.substr(0, 3)}${s}${response.substr(
          3,
          response.length - 1
        )}`
      }
    : { ...res };
};

const getPort = envPort => envPort || 3000;

module.exports = { requestFormatter, dilate, getPort };

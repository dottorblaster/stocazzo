type Port = string | number;

export const requestFormatter = (req) => (res) => {
  if (req.query.q) {
    res.query = req.query.q;
    if (res.query.slice(-1) != "?") {
      res.query = res.query + "?";
    }
  }
  return { ...res };
};

export const dilate = (req) => (s) => (res) => {
  const { response } = res;

  return req.query.big == 1
    ? {
        ...res,
        response: `${response.substr(0, 3)}${s}${response.substr(
          3,
          response.length - 1
        )}`,
      }
    : { ...res };
};

export const parsePort = (envPort: Port = 3000) => {
  const port = typeof envPort === "string" ? Number(envPort) : envPort;
  if (Number.isInteger(port) && port >= 1 && port <= 65535) {
    return port;
  }
  throw new Error("please provide a valid port number");
};

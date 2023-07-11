import { substr } from 'runes';
import { StocazzoRequest, StocazzoResponse } from './types';

type Port = string | number;

export const requestFormatter =
  (req: StocazzoRequest) =>
  (res: StocazzoResponse): StocazzoResponse => {
    if (req.query.q) {
      res.query = req.query.q;
      if (res.query.slice(-1) != '?') {
        res.query = res.query + '?';
      }
    }
    return { ...res };
  };

export const dilate =
  (req: StocazzoRequest) =>
  (s: string) =>
  (res: StocazzoResponse): StocazzoResponse => {
    const { response } = res;

    return req.query.big == 1
      ? {
          ...res,
          response: `${substr(response, 0, 3)}${s}${substr(
            response,
            3,
            response.length - 1,
          )}`,
        }
      : { ...res };
  };

export const parsePort = (envPort: Port = 3000): number => {
  const port = typeof envPort === 'string' ? Number(envPort) : envPort;
  if (Number.isInteger(port) && port >= 1 && port <= 65535) {
    return port;
  }
  throw new Error('please provide a valid port number');
};

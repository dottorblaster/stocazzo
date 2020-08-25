import { FastifyRequest } from "fastify";

type StocazzoRequestContent = {
  params?: {
    format: string;
  };
  query?: {
    big?: number;
    q: string;
  };
};

export type StocazzoRequest =
  | StocazzoRequestContent
  | FastifyRequest<{
      Params: {
        format: string;
      };
      Querystring: {
        big: number;
        q: string;
      };
    }>;

export interface StocazzoResponse {
  response: string;
  query?: string;
}

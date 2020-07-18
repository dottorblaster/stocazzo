import { RequestGenericInterface } from "fastify";

export interface StocazzoRequest extends RequestGenericInterface {
  Params: {
    format: string;
  };
}

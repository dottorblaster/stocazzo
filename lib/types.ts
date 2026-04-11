export interface StocazzoRequestContent {
  params?: {
    format: string;
  };
  query: {
    big?: number;
    q: string;
  };
}

export interface StocazzoRequest {
  Params: {
    format: string;
  };
  Querystring: {
    big: number;
    q: string;
  };
}

export interface StocazzoResponse {
  response: string;
  query?: string;
}

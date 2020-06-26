import { init } from '../lib/server';

describe("Testing stocazzo's", () => {
  let server;

  beforeEach(async () => {
    server = await init();
  });

  it('GET /', async () => {
    const options = {
      method: 'GET',
      url: '/',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.json().response).toBe('stocazzo');
  });

  it('GET / with request body', async () => {
    const options = {
      method: 'GET',
      url: '/?q=chi%20e',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.json().query).toBe('chi e?');
    expect(response.json().response).toBe('stocazzo');
  });

  it('GET /caps', async () => {
    const options = {
      method: 'GET',
      url: '/caps',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.json().response).toBe('STOCAZZO');
  });

  it('GET /caps with request body', async () => {
    const options = {
      method: 'GET',
      url: '/caps?q=chi%20e',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.json().query).toBe('chi e?');
    expect(response.json().response).toBe('STOCAZZO');
  });

  it('GET /camel', async () => {
    const options = {
      method: 'GET',
      url: '/camel',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.json().response).toBe('StoCazzo');
  });

  it('GET /ascii', async () => {
    const options = {
      method: 'GET',
      url: '/ascii',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.json().response).toBe('8====D');
  });

  it('GET /underscore', async () => {
    const options = {
      method: 'GET',
      url: '/underscore',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.json().response).toBe('sto_cazzo');
  });

  it('GET /underscore with big=true', async () => {
    const options = {
      method: 'GET',
      url: '/underscore?big=1',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.json().response).toBe('sto_gran_cazzo');
  });

  it('GET /sto-conte', async () => {
    const options = {
      method: 'GET',
      url: '/sto-conte',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.json().response).toBe('Sto cazzo!');
  });

  it('GET /sto-conte with big=true', async () => {
    const options = {
      method: 'GET',
      url: '/sto-conte?big=1',
    };

    const response = await server.inject(options);
    expect(response.statusCode).toBe(200);
    expect(response.json().response).toBe('Sto gran cazzo!');
  });
});

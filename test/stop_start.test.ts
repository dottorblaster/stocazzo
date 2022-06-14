import { AddressInfo } from 'net';

import { start } from '../lib/server';

describe('server start', () => {
  it('simply start and stop the server', async () => {
    const server = await start();
    const addressInfo = server.server.address() as AddressInfo;
    expect(addressInfo.address).toEqual('0.0.0.0');
    expect(addressInfo.port).toEqual(3000);

    await server.close();
  });
});

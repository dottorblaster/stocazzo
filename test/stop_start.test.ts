import { start } from "../lib/server";

describe("server start", () => {
  it("simply start and stop the server", async () => {
    const server = await start();
    expect(server.server.address()).toEqual({
      address: "0.0.0.0",
      family: "IPv4",
      port: 3000,
    });
    await server.close();
  });
});

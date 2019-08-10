const Lab = require("@hapi/lab");
const { expect } = require("@hapi/code");
const { describe, it } = (exports.lab = Lab.script());
const { start } = require("../lib/server");

describe("server start", () => {
  it("simply start and stop the server", async () => {
    const server = await start();
    const {
      settings: { host }
    } = server;
    expect(host).to.equal("localhost");
    await server.stop();
  });
});

const Lab = require("@hapi/lab");
const { expect } = require("@hapi/code");
const { describe, it } = (exports.lab = Lab.script());
const { requestFormatter, dilate } = require("../lib/utils");

describe("Utils module", () => {
  it("Utils requestFormatter() adding question mark", () => {
    const testReq = { query: { q: "chi è" } };
    const testRes = { response: "stocazzo" };

    requestFormatter(testReq, testRes);
    expect(testRes.query).to.equal("chi è?");
  });

  it("Utils requestFormatter(), no question mark added", () => {
    const testReq = { query: { q: "chi è?" } };
    const testRes = { response: "stocazzo" };

    requestFormatter(testReq, testRes);
    expect(testRes.query).to.equal("chi è?");
  });

  it("Utils dilate() should enlarge consistently", () => {
    const testReq = { query: { q: "chi è?", big: 1 } };
    const testRes = { response: "stocazzo" };

    dilate(testReq, testRes, "gran");
    expect(testRes.response).to.equal("stograncazzo");
  });

  it("Utils dilate() should behave if big param is something else", () => {
    const testReq = { query: { q: "chi è?", big: 2 } };
    const testRes = { response: "stocazzo" };

    dilate(testReq, testRes, "gran");
    expect(testRes.response).to.equal("stocazzo");
  });
});

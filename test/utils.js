import mocha from "mocha";
import chai from "chai";

import "../src/server.js";
import { isDev, config } from "../src/config";

const expect = chai.expect;

describe("isDev", function() {
  it("returns false in test environment", function() {
    expect(isDev).to.be.false;
  });
});

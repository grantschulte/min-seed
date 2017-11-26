import mocha from "mocha";
import chai from "chai";
import chaiHttp from "chai-http";

import "../../src/server.js";
import { config } from "../../src/config";

const rootUrl = `http://${config.host}:${config.port}`;
const expect = chai.expect;

chai.use(chaiHttp);

describe("Unknown routes", function() {
  it("should respond with 404 and html", function(done) {
    chai.request(rootUrl)
      .get("/unknown-route")
      .end(function(err, res) {
        expect(err).to.exist;
        expect(err.message).to.equal("Not Found");
        expect(res).to.have.status(404);
        expect(res).to.be.html;
        done();
      });
  });
});

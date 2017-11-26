import mocha from "mocha";
import chai from "chai";
import chaiHttp from "chai-http";

import "../../src/server.js";
import { config } from "../../src/config";

const rootUrl = `http://${config.host}:${config.port}`;
const expect = chai.expect;

chai.use(chaiHttp);

describe("Styleguide route", function() {
  it("should respond with 404 and html in non dev environements", function(done) {
    chai.request(rootUrl)
      .get("/styleguide")
      .end(function(err, res) {
        expect(err.message).to.equal("Not Found")
        expect(res).to.have.status(404);
        expect(res).to.be.html;
        done();
      });
  });
});

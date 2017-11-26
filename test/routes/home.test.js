import mocha from "mocha";
import chai from "chai";
import chaiHttp from "chai-http";

import "../../src/server.js";
import { config } from "../../src/config";

const rootUrl = `http://${config.host}:${config.port}`;
const expect = chai.expect;

chai.use(chaiHttp);

describe("Home route", function() {
  it("should respond with 200 and html", function(done) {
    chai.request(rootUrl)
      .get("/")
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      });
  });

  it("should redirect /home to base url", function(done) {
    chai.request(rootUrl)
      .get("/home")
      .end(function(err, res) {
        expect(err).to.be.null;
        expect(res).to.redirect;
        expect(res).to.redirectTo(`${rootUrl}/`);
        done();
      });
  });
});

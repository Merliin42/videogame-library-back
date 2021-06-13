const expect = require("chai").expect;
const request = require("supertest");
const server = require("../src/test_server");

describe("When routeroute is called", function() {
    it("returns 200 response", function (done) {
        // GIVEN
        console.log(server.listener);
        // WHEN
        request(server.listener)
        .get("/")
        
        // THEN
        .expect(200, (err, resp) => {
            expect(resp.status).to.eql(200);
            done();
        })
    });
});
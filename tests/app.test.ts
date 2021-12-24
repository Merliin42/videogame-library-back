import { expect } from "chai";
import request from "supertest";
import { server } from "../src/test_server";

describe("When root route is called", function () {
    it("returns 200 response", function (done) {
        // GIVEN

        // WHEN
        request(server)
            .get("/")

            // THEN
            .expect(200, (err, resp) => {
                expect(resp.status).to.eql(200);
                done();
            });            
    });
});

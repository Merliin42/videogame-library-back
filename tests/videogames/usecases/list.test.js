const chai = require("chai");
const expect = chai.expect;
const { listVideogames } = require("../../../src/videogames/usecases/list");
const assertArrays = require("chai-arrays");
chai.use(assertArrays);

describe("When listVideogames is called", function() {
    it("returns a list of videogames", function (done) {
        // GIVEN
        const expected = [
            {
                id: "XDF01",
                name: "Zelda"
        }, {
                id: "LR04",
                name: "MGS"
        }];
        // WHEN
        const actual = listVideogames();
        //THEN
        expect(actual).to.be.array();
        done();
    })
})
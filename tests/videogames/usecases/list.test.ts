import chai from "chai";
import { expect } from "chai";
import { listVideogames } from "../../../src/videogames/usecases/list";
import assertArrays from "chai-arrays";

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
        expect(actual).to.be.an('array');
        done();
    })
})
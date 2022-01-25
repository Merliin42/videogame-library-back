import chai from "chai";
import { expect } from "chai";
import { listVideogames } from "../../../src/Videogames/usecases/list";
import assertArrays from "chai-arrays";

chai.use(assertArrays);

describe("When listVideogames is called", function () {
    it("returns a list of videogames", function (done) {
        // GIVEN
        const expected = [
            {
                id: "XDF01",
                name: "Zelda",
            },
            {
                id: "LR04",
                name: "MGS",
            },
        ];
        // WHEN
        const actual = listVideogames();
        //THEN
        expect(actual).to.be.an("object");
        expect(actual.mgs.name).to.eql("Metal Gear Solid");
        expect(actual.zelda.name).to.eql("Zelda");
        done();
    });
});

import { expect } from "chai";
import { Videogame } from "../../../src/Videogames/domain/videogame";

describe("When you create a videogame instance", function() {
    it("returns a valid videogame", function() {
        // GIVEN
        const name = "Zelda";
        const id = 1;
        
        // WHEN
        const zelda = new Videogame(name, id);

        // THEN
        expect(zelda).to.be.an("object");
        expect(zelda.id).to.eql(1);
        expect(zelda.name).to.eql("Zelda");
    })
})
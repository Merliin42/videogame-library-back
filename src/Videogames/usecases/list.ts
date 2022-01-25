import { Videogame } from "../domain/videogame";

export const listVideogames = function () {
    const zelda: Videogame = new Videogame("Zelda", 1);
    const mgs: Videogame = new Videogame("Metal Gear Solid", 2);
    console.log(JSON.stringify(zelda));

    const list = { zelda: zelda, mgs: mgs };
    return list;
};

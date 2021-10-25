import { Videogame } from "../entities/videogame";

export const listVideogames = function () {
    const zelda: Videogame = new Videogame("Zelda", 1);
    const mgs: Videogame = new Videogame("Metal Gear Solid", 2);

    const list: string[] = [JSON.stringify(zelda), JSON.stringify(mgs)];
    return list;
};
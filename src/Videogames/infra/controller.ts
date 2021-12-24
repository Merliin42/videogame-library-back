import { listVideogames } from "../usecases/list";

export const listVideogamesRoute = {
    method: "GET",
    path: "/videogames",
    handler: (request: any, h: any) => {
        console.log("Tamer");
        // return listVideogames;
        return { test: "test" };
    },
};

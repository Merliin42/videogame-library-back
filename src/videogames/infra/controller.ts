import { listVideogames } from "../usecases/list";

export const listVideogamesRoute = {
    method: 'GET',
    path: '/videogames',
    handler: (request, h) => {
        const response = listVideogames;
        return response;
    }
}
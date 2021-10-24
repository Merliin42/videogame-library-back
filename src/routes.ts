import { listVideogamesRoute } from "./videogames/infra/controller";

const rootroute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello World! This is my videogame library.';
    }
};


export const routes = [ rootroute, listVideogamesRoute ];
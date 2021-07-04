const { listVideogamesRoute } = require("./videogames/infra/controller");

const rootroute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello World! This is my videogame library.';
    }
};


const routes = [ rootroute, listVideogamesRoute ];
exports.routes = routes;
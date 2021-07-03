const { libraryRoute } = require("./library/controllers/library_controller");

const rootroute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello World! This is my videogame library.';
    }
};


const routes = [ rootroute, libraryRoute ];
exports.routes = routes;
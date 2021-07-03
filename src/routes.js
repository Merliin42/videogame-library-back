const rootroute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello World! This is my videogame library.';
    }
};


const libraryroute = {
    method: 'GET',
    path: '/library',
    handler: (request, h) => {
        const response = Object({test: "test"})
        return response;
    }
}

const routes = [ rootroute, libraryroute ];
exports.routes = routes;
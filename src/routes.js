const rootroute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello World! This is my videogame library.';
    }
};

exports.rootroute = rootroute;

const libraryroute = {
    method: 'GET',
    path: '/library',
    handler: (request, h) => {
        const response = Object({test: "test"})
        return response;
    }
}

exports.libraryroute = libraryroute;
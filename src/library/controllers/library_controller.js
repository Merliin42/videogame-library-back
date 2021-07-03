const libraryRoute = {
    method: 'GET',
    path: '/library',
    handler: (request, h) => {
        const response = Object({test: "test"})
        return response;
    }
}

exports.libraryRoute = libraryRoute;
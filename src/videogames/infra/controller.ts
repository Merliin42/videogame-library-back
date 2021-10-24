export const listVideogamesRoute = {
    method: 'GET',
    path: '/videogames',
    handler: (request, h) => {
        const response = Object({test: "test"});
        return response;
    }
}
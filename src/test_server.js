'use strict';

const Hapi = require('@hapi/hapi');
const { routes } = require("./routes");

const init_test_server = () => {
    const server = Hapi.server({
        port: 3001,
        host: 'localhost'
    });
    
    routes.forEach(currentRoute => {
        server.route(currentRoute);
    });
    return server;
};

const server = init_test_server();
exports.server = server;
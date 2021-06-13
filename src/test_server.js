'use strict';

const Hapi = require('@hapi/hapi');
const { routeroute } = require("./routes");

const init_test_server = () => {
    const server = Hapi.server({
        port: 3001,
        host: 'localhost'
    });

    server.route(routeroute);
    // await server.start();
    return server;
};

const server = init_test_server();
exports.server = server;
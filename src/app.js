'use strict';

const Hapi = require('@hapi/hapi');
const { rootroute, libraryroute } = require("./routes");

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route(rootroute);
    server.route(libraryroute);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
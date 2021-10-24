'use strict';

import Hapi from "@hapi/hapi"
import { routes } from "./routes";

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

export const server = init_test_server();
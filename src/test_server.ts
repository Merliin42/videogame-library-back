"use strict";

import express from "express";
import { routes } from "./routes";

const app = express();

routes.forEach((route) => {
    app.use("/", route);
});

export const server = app;

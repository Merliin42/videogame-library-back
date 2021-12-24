"use strict";

import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

export const server = app;

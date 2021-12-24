import { listVideogamesRoute } from "./Videogames/infra/controller";
import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
    res.send("Hello World, this is my videogame library!");
});

export const routes = [router, listVideogamesRoute];

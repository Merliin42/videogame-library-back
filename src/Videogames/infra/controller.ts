import { listVideogames } from "../usecases/list";
import { Router } from "express";

const router = Router();

router.get("/videogames", function (req, res) {
    res.status(200).json(listVideogames());
});

export const listVideogamesRoute = router;
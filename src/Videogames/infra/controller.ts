import { listVideogames } from "../usecases/list";
import { Router } from "express";

const router = Router();

router.get("/videogames", function (req, res) {
    res.json({ test: "test" });
});

export const listVideogamesRoute = router;
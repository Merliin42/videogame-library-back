import express from "express";
import { routes } from "./routes";

const app = express();
const port = 3000;

routes.forEach((route) => {
    app.use("/", route);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

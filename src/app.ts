import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).send("Hello World, this is my videogame library!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

import express from "express";

import knexLibrary from "knex";

const dbFile =
    "C:\Users\Lenovo\Desktop\HYF\hyf-assignments\courses\foundation\databases\tasks.sqlite3";

const knex = knexLibrary({
    client: "sqlite3",
    connection: {
        filename: dbFile,
    },
    useNullAsDefault: true,
});

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/users", (req, res) => {
    res.send("User list");
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

import express from "express";
import knex from "knex";

const app = express();
const port = 3000;

app.use(express.json());

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
    client: "sqlite3",
    connection: {
        filename: "tasks.sqlite3",
    },
    useNullAsDefault: true, // Omit warning in console
});

app.get("/", (req, res) => {
    res.send("Hello from exercise 2!");
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
    const rows = await knexInstance.raw("SELECT * FROM user ORDER BY id ASC;");
    res.json(rows);
});

// TODO implement more routes here
//Get all tasks
app.get("/tasks", async (req, res) => {
    const tasks = await knexInstance.raw("SELECT * FROM task;");
    res.json(tasks);
});

//Get all tasks assigned a user
app.get("/users/:id/tasks", async (req, res) => {
    const userId = Number(req.params.id);

    const tasksOfUser = await knexInstance("task").where({ user_id: userId });

    res.json(tasksOfUser);
});

//Add another user
app.post("/users", async (req, res) => {
    console.log("POST /users hit");
    const { name, email, phone } = req.body;

    if (!name || !email)
        return res.status(400).json({ message: "name and email are required" });

    const [id] = await knexInstance("user").insert({
        name,
        email,
        phone,
    });

    res.status(201).json({
        message: "User created",
        id,
        name,
        email,
        phone,
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//Get user count
app.get("/user-count", async (req, res) => {
    const userCount = await knexInstance.raw(
        "SELECT count(*) as count FROM user;"
    );
    res.send(`
       <html>
            <head>
                <title>User Count</title>
                <style>
                body {
                    font-family: Arial, Helvetica, sans-serif;
                    background-color: #0b0336;
                    color: #fafafa;
                    max-width: 500px;
                    min-width: 300px;
                    text-align: center;
                    margin-top: 10rem;
                    padding: 16px;
                    gap: 24px;
                }

                h1 {
                    font-size: 64px;
                }

                p {
                    font-size: 16px;
                }
                </style>
            </head>
            <body>
                <h1>User Count</h1>
                <p>In this database there is ${userCount[0].count} users.</p>
            </body>
       </html> 
        `);
});

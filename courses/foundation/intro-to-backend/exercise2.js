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
async function getAllUsers() {
    const rows = await knexInstance.raw("SELECT * FROM user ORDER BY id ASC;");
    return rows;
}

app.get("/all-users", async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
});

// TODO implement more routes here
//Get all tasks
async function getAllTasks() {
    const result = await knexInstance.raw("SELECT * FROM task;");
    return result;
}

function renderTasksPage(tasks) {
    const taskItems = tasks.map((task) => `<li>${task.title}</li>`).join("");
    return `
    <html>
        <head>
            <title>Tasks</title>
        </head>
        <body>
            <h1>All Tasks</h1>
            <ul>
                ${taskItems}
            </ul>
        </body>
    </html>
    `;
}

app.get("/tasks", async (req, res) => {
    const tasks = await getAllTasks();
    const page = renderTasksPage(tasks);
    res.send(page);
});

//Get all tasks assigned a user
async function getTasksByUserId(userId) {
    const tasks = await knexInstance("task").where({ user_id: userId });
    return tasks;
}

function renderUserTasksPage(userId, tasks) {
    const taskItems = tasks.map((task) => `<li>${task.title}</li>`).join("");

    return `
    <html>
        <head>
            <title>User Tasks</title>
        </head>
        <body>
            <h1>Tasks for User ${userId}</h1>
            <ul>
                ${taskItems}
            </ul>
        </body>
    </html>
    `;
}

app.get("/user/:id/tasks", async (req, res) => {
    const userId = Number(req.params.id);

    const tasks = await getTasksByUserId(userId);
    const page = renderUserTasksPage(userId, tasks);

    res.send(page);
});

//Add another user
async function createUser(name, email) {
    const [id] = await knexInstance("user").insert({ name, email });
    return id;
}

function renderCreateUserResponse(userId) {
    return { id: userId };
}

app.post("/user", async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "name and email are required" });
    }

    const userId = await createUser(name, email, phone);
    const response = renderCreateUserResponse(userId, name, email, phone);

    res.status(201).json(response);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//Get user count
async function getUserCount() {
    const result = await knexInstance("user").count("id as count");

    return result[0].count;
}

function renderUserCountPage(userCount) {
    return `
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
                <p>In this database there is ${userCount} users.</p>
            </body>
       </html> 
        `;
}

app.get("/user-count", async (req, res) => {
    const userCount = await getUserCount();
    const page = renderUserCountPage(userCount);
    res.send(page);
});

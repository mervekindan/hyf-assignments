-- EXERCISE 2
-- List the names and phones of all of the users.
SELECT name, phone FROM "user";

-- List all of the users, ordering them by name alphabetically.
SELECT * FROM "user" ORDER BY name;

-- Find the name of the user of id 10.
SELECT name  FROM "user" WHERE id = 10;

-- Find 3 oldest (by create date) tasks.
SELECT * FROM task ORDER BY created ASC LIMIT 3;


--INTERACTIVE PRACTICE
-- Add a new task:
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Prepare presentation', 'Create slides for the team meeting', DATETIME('now'), DATETIME('now'), null, 2, 1);

-- Verify the task was added:
SELECT * FROM task ORDER BY id DESC LIMIT 1;

-- Update the task status:
UPDATE task SET status_id = 1 WHERE title = 'Prepare presentation';

-- Check that the update worked:
SELECT * FROM task WHERE title = 'Prepare presentation';


-- EXERCISE 3
-- Add yourself as a new user in the user table
INSERT INTO user(name, email, phone) VALUES("Merve Kindan", "mervekanmaz10@gmail.com", "22771216");

-- Create 2 or more tasks assigned to yourself
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Clean the cat litter', 'It is only 30 seconds', DATETIME('now'), DATETIME('now'), null, 1, 13);

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Learn SQLite', 'You can enjoy while learning', DATETIME('now'), DATETIME('now'), null, 1, 13);

-- Update the task you just created to change its status to "In Progress" (status_id = 2)
UPDATE task SET status_id = 2 WHERE title = 'Clean the cat litter';

--Retrieve only the title and description of all tasks assigned to you
SELECT title, description FROM task WHERE user_id = 13;

-- Delete a task that you no longer need
DELETE FROM task WHERE user_id = 13 AND status_id = 3;

-- Verify that the task has been deleted
SELECT * FROM task;

let savedName = "";
let toDoList = [];

function getReply(command) {
    //meeting
    if (command.includes("Hello my name is")) {
        const parts = command.split("my name is ");
        const name = parts[1];

        if (!savedName) {
            savedName = name;
            return "Nice to meet you " + savedName;
        } else {
            return "You already told me your name, " + savedName;
        }
    }

    //say name
    if (command === "What is my name?") {
        if (savedName) {
            return "Your name is " + savedName;
        } else {
            return "I don't know your name yet.";
        }
    }

    //add or remove todo
    if (command.includes("Add ") && command.includes(" to my todo")) {
        const afterAdd = command.split("Add ")[1];
        let task = afterAdd.split(" to my todo")[0];
        toDoList.push(task);
        return task + " added to your todo";
    } else if (
        command.includes("Remove ") &&
        command.includes(" from my todo")
    ) {
        const afterRemove = command.split("Remove ")[1];
        let task = afterRemove.split(" from my todo")[0];
        let index = toDoList.indexOf(task);

        if (index !== -1) {
            toDoList.splice(index, 1);
            return task + " removed from your todo";
        } else {
            return task + " is not in your todo";
        }
    } else if (command === "What is on my todo?") {
        return "you have " + toDoList.length + " todos: " + toDoList;
    }

    //say the day
    if (command.includes("What day is it today?")) {
        const today = new Date();
        const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        return day + ". of " + monthNames[month] + " " + year;
    }

    //calculate simple math
    if (command.includes("What is")) {
        const afterWhatIs = command.split("What is ")[1];

        if (command.includes("+")) {
            let num1 = afterWhatIs.split(" + ")[0];
            let num2 = afterWhatIs.split(" + ")[1];
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            return num1 + num2;
        } else if (command.includes("-")) {
            let num1 = afterWhatIs.split(" - ")[0];
            let num2 = afterWhatIs.split(" - ")[1];
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            return num1 - num2;
        } else if (command.includes("*")) {
            let num1 = afterWhatIs.split(" * ")[0];
            let num2 = afterWhatIs.split(" * ")[1];
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            return num1 * num2;
        } else if (command.includes("/")) {
            let num1 = afterWhatIs.split(" / ")[0];
            let num2 = afterWhatIs.split(" / ")[1];
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            return num1 / num2;
        }
    }

    //set a timer
    if (command.includes("Set a timer for")) {
        const words = command.split(" ");
        const time = parseInt(words[4]);
        const unit = words[5];

        let waitingTime;
        if (unit === "minutes") {
            waitingTime = time * 60 * 1000;
        }

        if (unit === "seconds") {
            waitingTime = time * 1000;
        }

        setTimeout(function () {
            console.log("Timer done!");
        }, waitingTime);

        return "Timer set for " + time + " " + unit;
    }
}

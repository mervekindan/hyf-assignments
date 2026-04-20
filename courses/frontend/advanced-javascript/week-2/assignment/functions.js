//2.1 Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(() => {
    const taskText1 = document.querySelector(".task1");

    taskText1.textContent = "Called after 2.5 seconds";
}, 2500);

//2.2 & 2.3
const taskText2 = document.querySelector(".task2");

function delayString(delay, stringToLog) {
    setTimeout(() => {
        taskText2.textContent = stringToLog;
    }, delay * 1000);
}

const taskBtn3 = document.querySelector(".task3-button");

taskBtn3.addEventListener("click", () => {
    delayString(5, "I'm learning JS!");
});

//2.4
const earth = function () {
    document.querySelector(".task4-earth").textContent = "Earth";
};

const saturn = function () {
    document.querySelector(".task4-saturn").textContent = "Saturn";
};

function planetLog(planetLogFunction) {
    planetLogFunction();
}

planetLog(earth);
planetLog(saturn);

//2.5
const locationButton = document.querySelector(".task5-button");
const locationOutput = document.querySelector(".task5");

locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            locationOutput.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
        });
    } else {
        locationOutput.textContent =
            "Geolocation is not supported by this browser.";
    }
});

//2.7
function runAfterDelay(delay, callback) {
    setTimeout(() => {
        callback();
    }, delay * 1000);
}
const callbackButton = document.querySelector(".task7-button");
const input = document.querySelector(".task7-input");

callbackButton.addEventListener("click", () => {
    const delay = Number(input.value);
    runAfterDelay(delay, () => {
        document.querySelector(".task7").textContent =
            `Callback executed after ${delay} seconds`;
    });
});

//2.8
// document.addEventListener("dblclick", () => {
//     document.querySelector(".task8").textContent = "Double click!";
// });

//Detect a double click in a specific period
let lastClickTime = 0;

document.addEventListener("click", () => {
    const currentTime = new Date().getTime();

    if (currentTime - lastClickTime < 500) {
        document.querySelector(".task8").textContent = "Double click!";
    }

    lastClickTime = currentTime;
});

//2.9
function logFunnyJoke() {
    document.querySelector(".task9").textContent = "This is a funny joke.";
}

function logBadJoke() {
    document.querySelector(".task9").textContent = "This is a bad joke.";
}

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
    if (shouldTellFunnyJoke === true) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
};

const jokeButton = document.querySelector(".task9-button");

jokeButton.addEventListener("click", function () {
    jokeCreator(true, logFunnyJoke, logBadJoke);
});

//3.1
const output = document.querySelector(".function-array-output");
const functionArray = [
    () => "Function 1 called.",
    () => "Function 2 called.",
    () => "Function 3 called.",
];

functionArray.forEach((func, index) => {
    output.textContent += func() + " ";
});

//3.2
const constFunction = () => {
    return "Const function called!";
};

function normalFunction() {
    return "Normal function called!";
}

const output2 = document.querySelector(".function-output");
const constFuncBtn = document.querySelector(".const-func-button");
constFuncBtn.addEventListener("click", () => {
    output2.textContent = constFunction();
});

const normalFuncBtn = document.querySelector(".normal-func-button");
normalFuncBtn.addEventListener("click", () => {
    output2.textContent = normalFunction();
});

//3.3
const object = {
    hello: function (name) {
        return `Nice to meet you ${name}`;
    },
};
const objectFuncBtn = document.querySelector(".object-func-button");
objectFuncBtn.addEventListener("click", () => {
    output2.textContent = object.hello("Merve");
});

// Task 1
const firstButton = document.querySelector(".first-button");
const secondButton = document.querySelector(".second-button");
const countSpan = document.querySelector(".counter-span");

let count = -1;

function listener() {
    count++;
    countSpan.textContent = count.toString();
}

firstButton.addEventListener("click", listener);
secondButton.addEventListener("click", listener);

//Task 2

const task2Button = document.querySelector(".task2-button");
const task2Text = document.querySelector(".task2-text");

task2Button.addEventListener("click", () =>
    setTimeout(() => {
        task2Text.textContent = "This text was delayed by 3 seconds";
    }, 3000),
);

//Task 3
const task3Text = document.querySelector(".task3-text");

function load() {
    task3Text.textContent = "DOM fully loaded and parsed.";
}

document.addEventListener("DOMContentLoaded", load);

//Task 4
let mouseLog = document.querySelector(".mouse-log");

function logKey(e) {
    mouseLog.innerText = `X: ${e.clientX} Y: ${e.clientY}`;
}

document.addEventListener("mousemove", logKey);

//Task 5
const data = [];

const listener2 = (e) => {
    data.push({
        x: e.clientX,
        y: e.clientY,
    });
};

document.addEventListener("mousemove", listener2);

setTimeout(() => {
    document.removeEventListener("mousemove", listener2);
    const sums = data.reduce(
        (acc, item) => {
            acc.sumX += item.x;
            acc.sumY += item.y;

            return acc;
        },
        { sumX: 0, sumY: 0 },
    );

    const avgX = sums.sumX / data.length;
    const avgY = sums.sumY / data.length;

    const text = document.querySelector(".task-5");
    text.textContent = `AVG X: ${avgX}; AVG Y: ${avgY}`;
}, 30000);

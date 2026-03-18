const startButton = document.querySelector(".start-button");
const input = document.querySelector(".number-input");
const scoreS = document.querySelector(".score-s");
const scoreL = document.querySelector(".score-l");
const statusOfGame = document.querySelector(".game-status");

const confettiS = { target: "confetti-s", max: 200, size: 2.5 };
const confettiL = { target: "confetti-l", max: 200, size: 2.5 };

const sConfetti = new ConfettiGenerator(confettiS);
const lConfetti = new ConfettiGenerator(confettiL);

let countS = 0;
let countL = 0;
let isGameStarted = false;

startButton.addEventListener("click", () => {
    const seconds = Number(input.value);

    if (!seconds || seconds < 1) {
        alert("Please enter a valid number of seconds!");
        return;
    }

    startGame(seconds);
});

function startGame(time) {
    isGameStarted = true;
    startButton.disabled = true;
    statusOfGame.textContent = "Game started!";

    countS = 0;
    countL = 0;
    scoreS.textContent = 0;
    scoreL.textContent = 0;

    setTimeout(() => {
        isGameStarted = false;
        startButton.disabled = false;
        endGame();
        statusOfGame.textContent = "Time's up!";
    }, time * 1000);
}

document.addEventListener("keydown", (event) => {
    if (!isGameStarted) {
        return;
    }

    const key = event.key.toLowerCase();

    if (key === "s") {
        countS++;
        scoreS.textContent = countS;
    } else if (key === "l") {
        countL++;
        scoreL.textContent = countL;
    }
});

function endGame() {
    if (countS > countL) {
        scoreS.textContent = `${countS} - Winner!`;
        scoreL.textContent = countL;
        sConfetti.render();
    } else if (countL > countS) {
        scoreS.textContent = countS;
        scoreL.textContent = `${countL} - Winner!`;
        lConfetti.render();
    } else if (countS === 0 && countL === 0) {
        scoreS.textContent = 0;
        scoreL.textContent = 0;
        alert("No one pressed anything!");
    } else {
        scoreS.textContent = `${countS} - Draw`;
        scoreL.textContent = `${countL} - Draw`;
    }
}

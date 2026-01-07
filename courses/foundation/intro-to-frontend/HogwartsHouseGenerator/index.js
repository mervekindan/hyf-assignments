const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const form = document.querySelector(".house-form");
const nameInput = document.querySelector(".name-input");
const result = document.querySelector(".result-text");

function getRandomHouse() {
    const randomIndex = Math.floor(Math.random() * houses.length);
    return houses[randomIndex];
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const enteredName = nameInput.value;
    const randomHouse = getRandomHouse();

    result.textContent = `Hello ${enteredName}, you have been assigned to ${randomHouse}!`;

    if (randomHouse === "Gryffindor") {
        document.body.style.background = "#740d0d";
        document.body.style.borderColor = "#ae0001";
    } else if (randomHouse === "Hufflepuff") {
        document.body.style.background = "#ecb939";
        document.body.style.borderColor = "#ffdb00";
    } else if (randomHouse === "Ravenclaw") {
        document.body.style.background = "#0e1a40";
        document.body.style.borderColor = "#222f5b";
    } else if (randomHouse === "Slytherin") {
        document.body.style.background = "#1a472a";
        document.body.style.borderColor = "#2f6743";
    }
});

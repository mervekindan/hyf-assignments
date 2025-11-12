//flight booking full name
function getFullName(firstName, surname, useFormalName) {
    const fullName = firstName + " " + surname;
    if (useFormalName) {
        return "Lord " + fullName;
    } else {
        return fullName;
    }
}

const fullName1 = getFullName("Benjamin", "Huges", true);
const fullName2 = getFullName("Merve", "Kindan", false);
const fullName3 = getFullName("Benjamin", "Button");

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);

//Event application
const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

function getEventWeekday(currentDayIndex, daysFromToday) {
    const numOfDaysInWeek = 7;
    const eventDayIndex = (currentDayIndex + daysFromToday) % numOfDaysInWeek;
    return weekDays[eventDayIndex];
}

console.log(getEventWeekday(6, 5));

//Weather wear
function getClothesAccordingToWeather(temperature) {
    let clothesToWear;
    if (temperature <= 9) {
        clothesToWear = "Wear what you can find";
    } else if (9 < temperature <= 22) {
        clothesToWear = "Wear a trenchcoat on your clothes";
    } else {
        clothesToWear = "Wear shorts and a t-shirt";
    }
    return clothesToWear;
}

const coldWeatherClothes = getClothesAccordingToWeather(5);
console.log(coldWeatherClothes);

//Student manager
const class07Students = [];
function addStudentToClass(studentName) {
    for (let i = 0; i < class07Students.length; i++) {
        if (studentName === class07Students[i]) {
            console.log("Student " + studentName + " is already in the class");
            return;
        }
    }

    if (studentName === "Queen") {
        class07Students.push(studentName);
        console.log("Queen added to class 07");
    } else if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07");
    } else if (studentName === "") {
        console.log("You cannot add an empty name to class 07");
    } else {
        class07Students.push(studentName);
    }
}

addStudentToClass("");
addStudentToClass("Merve");
addStudentToClass("Batuhan");
addStudentToClass("Lavinia");
addStudentToClass("Teadora");
addStudentToClass("Celine");
addStudentToClass("Vanessa");
addStudentToClass("Thomas");
addStudentToClass("Batuhan");
addStudentToClass("Queen");

function getNumberOfStudents() {
    return class07Students.length;
}

console.log(class07Students);
console.log(getNumberOfStudents() + " students in the class 07");

//Candy helper
const boughtCandyPrices = [];
function addCandy(candyType, weight) {
    let pricePerGram = 0;
    if (candyType === "Sweet") {
        pricePerGram = 0.5;
    } else if (candyType === "Chocolate") {
        pricePerGram = 0.7;
    } else if (candyType === "Toffee") {
        pricePerGram = 1.1;
    } else if (candyType === "Chewing-gum") {
        pricePerGram = 0.03;
    } else {
        console.log("Sorry we don't have " + candyType + " type candy");
        return;
    }
    const price = weight * pricePerGram;
    boughtCandyPrices.push(price);
    console.log(weight + " grams " + candyType + " added, costs: " + price);
}

addCandy("Sweet", 20);
addCandy("Sour", 50);
addCandy("Chocolate", 200);
addCandy("Toffee", 100);
addCandy("Chewing-gum", 40);

const amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
    let totalPrice = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalPrice += boughtCandyPrices[i];
    }

    console.log("Total price: " + totalPrice);

    if (totalPrice < amountToSpend) {
        console.log("You can buy more, so please do!");
        return true;
    } else {
        console.log("Enough candy for you!");
        return false;
    }
}

canBuyMoreCandy();

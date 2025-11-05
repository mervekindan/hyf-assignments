// Age-ify
const yearOfBirth = 1992;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log("Age-ify (A future age calculator):");
console.log("You will be " + age + " years old in " + yearFuture + ".");

// Goodboy-oldboy
const dogYearOfBirth = 2015;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    dogYear *= 7;
}

console.log("Goodboy-oldboy (A dog age calculator):");
console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture + "."
);

//Housey pricey
//Peter's House
const petersHouseWidth = 8;
const petersHouseDepth = 10;
const petersHouseHeight = 10;
const petersGardenSizeInM2 = 100;
const petersActualHousePrice = 2500000;
const petersHouseVolumeInM3 =
    petersHouseWidth * petersHouseDepth * petersHouseHeight;

const petersCalculatedHousePrice =
    petersHouseVolumeInM3 * 2.5 * 1000 + petersGardenSizeInM2 * 300;

console.log("Housey pricey (A house price estimator):");
if (petersCalculatedHousePrice <= petersActualHousePrice) {
    console.log("Peter is paying too much for his house.");
} else {
    console.log("Peter is paying less than the house is worth.");
}

//Julia's House
const juliasHouseWidth = 5;
const juliasHouseDepth = 11;
const juliasHouseHeight = 8;
const juliasGardenSizeInM2 = 70;
const juliasActualHousePrice = 1000000;
const juliasHouseVolumeInM3 =
    juliasHouseWidth * juliasHouseDepth * juliasHouseHeight;

const juliasCalculatedHousePrice =
    juliasHouseVolumeInM3 * 2.5 * 1000 + juliasGardenSizeInM2 * 300;

if (juliasCalculatedHousePrice <= juliasActualHousePrice) {
    console.log("Julia is paying too much for her house.");
} else {
    console.log("Julia is paying less than the house is worth.");
}

// Ez Namey
const firstWords = [
    "Crazy",
    "Funky",
    "Childish",
    "Amazing",
    "Recent",
    "Happy",
    "Punk",
    "Inviting",
    "Pleasant",
    "Black-eyed",
];
const secondWords = [
    "Cat",
    "Peas",
    "People",
    "Coding",
    "Lady",
    "Fish",
    "Candy",
    "Magic",
    "Corner",
    "Building",
];

const startupName =
    firstWords[(randomNumber = Math.floor(Math.random() * 10))] +
    " " +
    secondWords[(randomNumber = Math.floor(Math.random() * 10))];

console.log("Ez Namey (Startup name generator):");
console.log(
    'The startup: "' +
        startupName +
        '" contains ' +
        startupName.length +
        " characters."
);

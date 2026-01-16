//Vowel count
/* DESCRIPTION
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

const vowels = ["a", "e", "i", "o", "u"];

function getCount(str) {
    let numberOfVowels = 0;
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        for (let j = 0; j < vowels.length; j++) {
            const currentVowel = vowels[j];
            if (currentChar === currentVowel) {
                numberOfVowels++;
                break;
            }
        }
    }

    return numberOfVowels;
}

//Square every digit
/* DESCRIPTION
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.
 */

function squareDigits(num) {
    let numAsDigitSquared = "";
    const numberAsString = "" + num;

    for (let i = 0; i < numberAsString.length; i++) {
        const digit = numberAsString[i];
        const digitAsNumber = parseInt(digit);
        const result = digitAsNumber * digitAsNumber;
        const resultStr = "" + result;
        numAsDigitSquared += resultStr;
    }
    return parseInt(numAsDigitSquared);
}

//Highest and Lowest
/* DESCRIPTION
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
Input: "1 2 3 4 5"   =>  Output: "5 1"
Input: "1 2 -3 4 5"  =>  Output: "5 -3"
Input: "1 9 3 4 -5"  =>  Output: "9 -5"

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */

function highAndLow(numbers) {
    const splittedNumbers = numbers.split(" ");

    let biggestNumber = Number.NEGATIVE_INFINITY;
    let smallestNumber = Number.POSITIVE_INFINITY;

    for (let i = 0; i < splittedNumbers.length; i++) {
        const num = parseInt(splittedNumbers[i]);

        if (num > biggestNumber) {
            biggestNumber = num;
        }
        if (num < smallestNumber) {
            smallestNumber = num;
        }
    }
    return biggestNumber + " " + smallestNumber;
}

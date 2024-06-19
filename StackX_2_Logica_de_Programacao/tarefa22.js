const prompt = require("prompt-sync")();

const numbersInput = prompt("Enter a list of numbers (use space as separator): ");

const numbersList = numbersInput
  .split(" ")
  .map((e) => Number(e))
  .sort((a, b) => a - b);

const smallestNumber = numbersList[0];
const largestNumber = numbersList[numbersList.length - 1];

console.log(`The smallest number is ${smallestNumber}`);
console.log(`The largest number is ${largestNumber}`);

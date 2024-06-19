const prompt = require("prompt-sync")();

const num1 = parseInt(prompt("Type number 1: "));
const num2 = parseInt(prompt("Type number 2: "));

const sumSquares = Math.pow(num1, 2) + Math.pow(num2, 2);

console.log(`The sum of the squares of ${num1} and ${num2} is ${sumSquares.toFixed(2)}.`);

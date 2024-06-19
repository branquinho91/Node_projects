const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter number 1: "));
const num2 = Number(prompt("Enter number 2: "));
const num3 = Number(prompt("Enter number 3: "));
const num4 = Number(prompt("Enter number 4: "));

const avg = (num1 + num2 + num3 + num4) / 4;

console.log(`The average is ${avg.toFixed(2)}.`);

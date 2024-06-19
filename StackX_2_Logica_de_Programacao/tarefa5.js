const prompt = require("prompt-sync")();

const sideLength = Number(prompt("Enter the length of the side: "));
const squareArea = Math.pow(sideLength, 2);
const squareAreaDouble = squareArea * 2;

console.log(`The area of the square is ${squareArea} and twice the area is ${squareAreaDouble}.`);

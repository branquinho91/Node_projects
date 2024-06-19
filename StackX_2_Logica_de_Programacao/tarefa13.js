const prompt = require("prompt-sync")();

let A = Number(prompt("Enter a value for A: "));
let B = Number(prompt("Enter a value for B: "));

console.log(`A is ${A}`);
console.log(`B is ${B}`);

[A, B] = [B, A];

console.log("After swap:");
console.log(`A is ${A}`);
console.log(`B is ${B}`);

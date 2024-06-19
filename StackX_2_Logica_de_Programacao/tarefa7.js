const prompt = require("prompt-sync")();

const height = Number(prompt("Enter your height (meters): "));
const idealWeight = calculateBMI(height);

console.log(`Your ideal weight is ${idealWeight.toFixed(2)}kg.`);

function calculateBMI(height) {
  return height * 72.7 - 58;
}

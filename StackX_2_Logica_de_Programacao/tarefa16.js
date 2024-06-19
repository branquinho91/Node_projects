const prompt = require("prompt-sync")();

let sum = 0;

for (let index = 1; index <= 10; index++) {
  const num = Number(prompt("Enter a number: "));
  sum += num;
}

console.log(`The sum of the values is ${sum}.`);

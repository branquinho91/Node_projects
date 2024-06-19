const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number to form the division table: "));

for (let index = 1; index <= 10; index++) {
  console.log(`${index * num} / ${num} = ${(index * num) / num}`);
}

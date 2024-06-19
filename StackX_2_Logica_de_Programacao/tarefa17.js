const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number to form the multiplication table: "));

for (let index = 1; index <= 10; index++) {
  console.log(`${index} x ${num} = ${num * index}`);
}

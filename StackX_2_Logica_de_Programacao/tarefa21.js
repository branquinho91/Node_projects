const prompt = require("prompt-sync")();

let area = 0;

do {
  const side = Number(prompt("Enter the size of the front of the site: "));
  const depth = Number(prompt("Enter the depth of the site: "));
  area = side * depth;
  console.log(`The area of the site is ${area.toFixed(2)}m².`);
} while (area >= 100);

const prompt = require("prompt-sync")();

const milesInput = Number(prompt("Enter a distance in miles: "));
const kilometers = milesToKM(milesInput);

console.log(`The distance in kilometers is ${kilometers.toFixed(2)}km.`);

function milesToKM(miles) {
  return miles * 1.6214;
}

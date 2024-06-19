const prompt = require("prompt-sync")();

const fuel = Number(prompt("Enter the amount of fuel filled in the car in liters: "));
const distancePerLiter = Number(prompt("Enter the distance the car travels per liter of fuel: "));

const maxDistance = fuel * distancePerLiter;

console.log(`Your car can travel up to ${maxDistance.toFixed(2)} kilometers on ${fuel} liters of fuel.`);

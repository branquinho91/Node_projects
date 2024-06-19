const prompt = require("prompt-sync")();

const foodInKilos = Number(prompt("Enter the quantity of a food in kilograms: "));
const gramsPerDay = 50;

const foodInGrams = foodInKilos * 1000;
const daysToEat = foodInGrams / gramsPerDay;

console.log(`It would take a person ${daysToEat} days to eat ${foodInKilos} kilograms of food.`);

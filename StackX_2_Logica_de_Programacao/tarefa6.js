const prompt = require("prompt-sync")();

const wagePerHour = Number(prompt("Enter the amount an employee earns per hour: "));
const hoursWorkedPerMonth = Number(prompt("Enter the number of hours worked in the month: "));
const monthlySalary = wagePerHour * hoursWorkedPerMonth;

console.log(`The employee earns $${monthlySalary.toFixed(2)} per month.`);

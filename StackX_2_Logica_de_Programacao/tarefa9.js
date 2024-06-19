const prompt = require("prompt-sync")();

const salary = Number(prompt("Enter your salary: "));
const percentage = 15;
const adjustedWage = salaryAdjustment(salary, percentage);

console.log(`Your salary adjusted by ${percentage}% is $${adjustedWage.toFixed(2)}`);

function salaryAdjustment(salary, percentage) {
  return salary * (1 + percentage / 100);
}

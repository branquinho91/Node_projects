const prompt = require("prompt-sync")();

const totalAttendance = Number(prompt("Enter the total attendance of a football game: "));
const totalIncome = calculateGameIncome(totalAttendance, 10, 50, 30, 10);

console.log(`The total income from the game was $${totalIncome.toFixed(2)}`);

function calculateGameIncome(totalAttendance, popularPercentage, generalPercentage, grandstandPercentage, chairsPercentage) {
  const popularPrice = 5;
  const generalPrice = 10;
  const grandstandPrice = 20;
  const chairsPrice = 30;

  const sum =
    totalAttendance * popularPrice * (popularPercentage / 100) +
    totalAttendance * generalPrice * (generalPercentage / 100) +
    totalAttendance * grandstandPrice * (grandstandPercentage / 100) +
    totalAttendance * chairsPrice * (chairsPercentage / 100);

  return sum;
}

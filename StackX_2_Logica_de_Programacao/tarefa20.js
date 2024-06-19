const prompt = require("prompt-sync")();

let studentID = Number(prompt("Enter a student ID (Zero to exit): "));

while (studentID !== 0) {
  const grade1 = Number(prompt("Enter the first grade: "));
  const grade2 = Number(prompt("Enter the second grade: "));
  const grade3 = Number(prompt("Enter the third grade: "));
  const avgGrade = (grade1 + grade2 + grade3) / 3;
  console.log(`This student's average grade is ${avgGrade.toFixed(2)}.`);
  studentID = Number(prompt("Enter a student ID (Zero to exit): "));
}

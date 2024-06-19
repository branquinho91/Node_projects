const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter a value: "));
const num2 = Number(prompt("Enter another value: "));

console.log("1.Addition, 2.Subtraction, 3.Division, 4.Multiplication");
const operation = prompt("Enter the desired operation (number only!): ");

const result = calculator(num1, num2, operation);

console.log(`The result of your operation is: ${result}`);

function calculator(num1, num2, operation) {
  let result;

  switch (operation) {
    case "1":
      result = num1 + num2;
      break;
    case "2":
      result = num1 - num2;
      break;
    case "3":
      result = num1 / num2;
      break;
    case "4":
      result = num1 * num2;
      break;
    default:
      result = "Invalid input";
      break;
  }
  return result;
}

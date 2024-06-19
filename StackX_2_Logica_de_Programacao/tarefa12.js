const prompt = require("prompt-sync")();

const books = Number(prompt("How many books would you like to buy? "));
const totalPrice = calculatePrice(books);

console.log(`${books} books will cost $${totalPrice}`);

function calculatePrice(books) {
  const price = books > 10 ? 8 : 12;
  return books * price;
}

const prompt = require("prompt-sync")();

console.log("Enter the number corresponding to the country you were born in:");
console.log(`
    1. Brazil,\n
    2. Portugal,\n
    3. Germany,\n
    4. UK,\n
    5. USA,\n
    6. Italy,\n
    7. Spain,\n
    8. Argentina,\n
    9. France\n`);

const country = prompt("Number only: ");
const language = checkLanguage(country);
console.log(`Your mother language is ${language}.`);

function checkLanguage(country) {
  let language = "";
  switch (country) {
    case "1":
    case "2":
      language = "portuguese";
      break;
    case "3":
      language = "german";
      break;
    case "4":
    case "5":
      language = "english";
      break;
    case "6":
      language = "italian";
      break;
    case "7":
    case "8":
      language = "spanish";
      break;
    case "9":
      language = "french";
      break;
    default:
      language = "Invalid country";
      break;
  }
  return language;
}

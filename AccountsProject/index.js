const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

operation();

//#region operation
function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["Create Account", "Check Balance", "Deposit", "Withdraw", "Quit"],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Create Account") {
        createAccount();
      } else if (action === "Check Balance") {
        getAccountBalance();
      } else if (action === "Deposit") {
        deposit();
      } else if (action === "Withdraw") {
        withdraw();
      } else if (action === "Quit") {
        console.log(chalk.bgBlue.black("Thanks for using Accounts!"));
        process.exit();
      }
    })
    .catch((err) => console.log(err));
}
//#endregion

//#region createAccount
function createAccount() {
  console.log(chalk.bgGray.black("Congratulations on using our bank!"));
  console.log(chalk.green("Set your account options below"));
  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Enter a name for your account:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black("This account already exists, choose another name!"));
        buildAccount();
        return;
      }
      if (!accountName) {
        console.log(chalk.bgRed.black("An error occurred, please try again later!"));
        buildAccount();
        return;
      }

      fs.writeFileSync(`accounts/${accountName}.json`, `{ "balance": 0 }`, (err) => console.log(err));

      console.log(chalk.green("Congratulations, your account has been created!"));
      operation();
    })
    .catch((err) => console.log(err));
}
//#endregion

//#region getAccountBalance
function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "What is the name of the account?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        getAccountBalance();
        return;
      }
      const accountData = getAccount(accountName);
      console.log(chalk.bgBlue.black(`Your account balance is $${accountData.balance}.`));
      operation();
    })
    .catch((err) => console.log(err));
}
//#endregion

//#region deposit
function deposit() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "What is the name of the account?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        deposit();
        return;
      }
      inquirer
        .prompt([
          {
            name: "amount",
            message: "What amount do you want to deposit?",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];
          addAmount(accountName, amount);
          operation();
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);
  if (!amount || amount <= 0) {
    console.log(chalk.bgRed.black("An error occurred, please try again later!"));
    deposit();
    return;
  }
  accountData.balance = parseFloat(accountData.balance) + parseFloat(amount);
  fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (err) => console.log(err));
  console.log(chalk.green(`The amount of $${amount} was deposited on your account`));
}
//#endregion

//#region withdraw
function withdraw() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "What is the name of the account?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        withdraw();
        return;
      }
      inquirer
        .prompt([
          {
            name: "amount",
            message: "What amount do you want to withdraw?",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];
          removeAmount(accountName, amount);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName);
  if (!amount || amount <= 0) {
    console.log(chalk.bgRed.black("An error occurred, please try again later!"));
    withdraw();
    return;
  }
  if (amount > accountData.balance) {
    console.log(chalk.bgRed.black("Insufficient balance, enter another amount!"));
    operation();
    return;
  }
  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);
  fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), (err) => console.log(err));
  console.log(chalk.green(`The amount of $${amount} has been withdrawn from your account`));
  operation();
}
//#endregion

//#region Utils
function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black("This account does not exist, please choose a valid account!"));
    return false;
  }
  return true;
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, { encoding: "utf8", flag: "r" });
  return JSON.parse(accountJSON);
}
//#endregion

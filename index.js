#! /usr/bin/env node
import inquirer from "inquirer";
// list of currencies and their exchange rates.
let exchange_rate = {
    "USD": 1,
    "EUR": 0.89,
    "JYP": 113,
    "CAD": 1.29,
    "INR": 82.63,
    "AUD": 1.43,
    "PKR": 280 // pakistani currency (rupee)
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "INR", "AUD", "PKR"],
        message: "Select the currency you want to convert from"
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "INR", "AUD", "PKR"],
        message: "Select the currency you convert into"
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount you want to convert"
    }
]);
// converting the amount from one currency to another.
let fromAmount = exchange_rate[userAnswer.from];
let toAmount = exchange_rate[userAnswer.to];
let amount = userAnswer.amount;
// formula to convert currency.
let result = (amount * fromAmount) / toAmount;
// displaying the converted amount.
console.log(`The converted amount is ${result}`);

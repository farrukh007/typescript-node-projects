#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("CURRENCY CONVERTER"); // start animation here
    //let rainbowTitle = chalkAnimation.glitch("Lets Start Calculation"); // start animation here
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let currConv = {
    "PKR": {
        "USD": 0.003585,
        "GBP": 0.003022,
        "PKR": 1
    },
    "USD": {
        "USD": 1,
        "GBP": 0.84,
        "PKR": 278.623
    },
    "GBP": {
        "USD": 1.188234,
        "GBP": 1,
        "PKR": 337.50
    }
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "fromCurrency",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Currency: "
    },
    {
        type: "list",
        name: "toCurrency",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Conversion Currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Conversion Amount: "
    }
]);
const { fromCurrency, toCurrency, amount } = answers;
if (fromCurrency && toCurrency && amount) {
    let result = currConv[fromCurrency][toCurrency] * amount;
    console.log(`Your conversion from ${fromCurrency} to ${toCurrency} = ${result}`);
}
else {
    console.log("Invalid Input!");
}

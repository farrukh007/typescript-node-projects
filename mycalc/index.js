#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Lets Start Calculation"); // start animation here
    //let rainbowTitle = chalkAnimation.glitch("Lets Start Calculation"); // start animation here
    await sleep();
    rainbowTitle.stop();
    console.log(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
    //console.log(`${rainbowTitle} is fine`);
}
await welcome();
/*
var figlet = require('figlet');
figlet('CALCULATOR', function(err: any, data: any) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
*/
function validateNumber(input) {
    const isNum = !isNaN(input);
    return isNum;
}
async function getOperation() {
    const answers = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "operator",
            message: "Following Mathematical Operation are available: \n",
            choices: ["Addition (+)", "Subtraction (-)", "Multiplication (x)", "Division (/)", "Power (^)"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter 1st Digit: ",
            //default: () => {},
            validate: validateNumber
        },
        {
            type: "number",
            name: "num2",
            message: "Enter 2nd Digit: "
        }
    ]);
    //.then((answers) => {
    // Use user feedback for... whatever!!
    //console.log(answers);
    if (answers.operator == "Addition (+)") {
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
    }
    else if (answers.operator == "Subtraction (-)") {
        console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
    }
    else if (answers.operator == "Multiplication (x)") {
        console.log(`${answers.num1} x ${answers.num2} = ${answers.num1 * answers.num2}`);
    }
    else if (answers.operator == "Division (/)") {
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
    }
    else if (answers.operator == "Power (^)") {
        let pwr = 1;
        for (var i = 0; i < answers.num2; i++) {
            pwr = pwr * answers.num1;
        }
        console.log(`${answers.num1} ^ ${answers.num2} = ${pwr}`);
    }
    //})
}
;
async function restartOps() {
    do {
        await getOperation();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Continue...? (Y/N): "
        });
    } while (again.restart == 'y' ||
        again.restart == 'Y' ||
        again.restart == 'yes' ||
        again.restart == 'YES');
}
;
restartOps();

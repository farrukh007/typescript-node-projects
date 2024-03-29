#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import {add, div, expo, mul, sub} from "./methods.js";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}

async function welcome(){
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

async function getOperation(){
    const answers = await inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"number",
        name:"num1",
        message:"Enter 1st Digit: ",
        validate: function (num1){
            if (!num1.isNaN){
                return true;
            }else 
            {
                // throw new Error ("Invalid Input!");
                return false;
            }
        }
        
    },
    {
        type:"number",
        name:"num2",
        message:"Enter 2nd Digit: ",
        validate: function (num2){
            if (!num2.isNaN){
               return true;
            }else{
            //throw new Error ("Invalid Input!");
            return false;
            }
        }
    },
    {
        type:"list",
        name:"operator",
        message:"Following Mathematical Operation are available: \n",
        choices:["Addition (+)","Subtraction (-)", "Multiplication (x)", "Division (/)", "Power (^)"]
    }

  ]);

    if (answers.operator == "Addition (+)"){
        
        console.log(`${answers.num1} + ${answers.num2} = ${add(answers.num1, answers.num2)}`);
    }
    else if (answers.operator == "Subtraction (-)"){
        console.log(`${answers.num1} - ${answers.num2} = ${sub(answers.num1, answers.num2)}`);
    }
    else if (answers.operator == "Multiplication (x)"){
        console.log(`${answers.num1} x ${answers.num2} = ${mul(answers.num1, answers.num2)}`);
    }
    else if (answers.operator == "Division (/)"){
        console.log(`${answers.num1} / ${answers.num2} = ${div(answers.num1, answers.num2)}`);
    }
    else if (answers.operator == "Power (^)"){
        console.log(`${answers.num1} ^ ${answers.num2} = ${expo(answers.num1, answers.num2)}`);
    }
};

async function restartOps(){
    do{
        await getOperation();
        var again = await inquirer
        .prompt({
            type: "input",
            name: "restart",
            message:"Restart...? (Y/N): "
        })
    } while(again.restart == 'y'  ||
            again.restart == 'Y'  ||
            again.restart == 'yes'||
            again.restart == 'YES')
};

restartOps();

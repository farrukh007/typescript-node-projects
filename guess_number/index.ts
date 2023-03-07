#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { exit } from "process";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    })
}

async function welcome(){
    let rainbowTitle = chalkAnimation.rainbow("Lets Guess a Number Between 1 to 10!"); // start animation here
    //let rainbowTitle = chalkAnimation.glitch("Lets Start Calculation"); // start animation here
    await sleep();
    rainbowTitle.stop();
}

await welcome();

interface answerType {
    guessNum: number
}

async function guessNumber(){
    let realNum: number = Math.floor(Math.random() * 10 + 1);
    const answer: answerType = await inquirer.prompt([
        {
            name: "guessNum",
            type: "number",
            message: "Enter Number: "
        }
    ]);

    if (answer.guessNum === realNum){
        console.log("You guess correctly!");
        console.log("The real Number was :", realNum);
    }
    else{
        console.log("You guess wrongly!");
        console.log("The real Number was :", realNum);
    }
}

/*
interface againType {
    restart: string
}

async function playAgain(){
    do{
        await guessNumber();
        const again: againType = await inquirer.prompt([
            {
            type: "input",
            name: "restart",
            message:"Play again (Y/N): "
            }
        ]);
    } while(again.restart == 'y'  ||
            again.restart == 'Y'  ||
            again.restart == 'yes'||
            again.restart == 'YES')
}
*/


async function playAgain(){
    do{
        await guessNumber();
        var again = await inquirer.prompt([
            {
            type: "input",
            name: "restart",
            message:"Play again (Y/N): "
            }
        ]);
    } while(again.restart == 'y'  ||
            again.restart == 'Y'  ||
            again.restart == 'yes'||
            again.restart == 'YES')
}

await playAgain();



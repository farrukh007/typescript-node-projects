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
    let rainbowTitle = chalkAnimation.rainbow("Hello ATM Machine"); // start animation here
    //let rainbowTitle = chalkAnimation.glitch("Lets Start Calculation"); // start animation here
    await sleep();
    rainbowTitle.stop();
}
await welcome();

interface UserType {
    name: string;
    pin: number;
    balance: number;
}

interface pinType {
    pin: number
}

let user : UserType = {
    name: "Ahmed Raza",
    pin: 1212,
    balance: 10000
}


const pinResp: pinType = await inquirer.prompt([
    {
        message: "Enter PIN Number: ",
        name: "pin"
    }
]);

if(pinResp.pin !== user.pin){
    console.log("You entered WRONG pin!");
    
}

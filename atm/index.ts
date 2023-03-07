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
    balance: 100000
}


const pinResp: pinType = await inquirer.prompt([
    {
        message: "Enter PIN Number: ",
        name: "pin",
        type: "password"
    }
]);

//console.log(pinResp);

if(Number(pinResp.pin) !== user.pin){
    console.log("You entered WRONG pin!");
}
else{
    const atmTransaction = await inquirer.prompt([
        {
            name: "selectOpt",
            message: "Select Option",
            type: "list",
            choices: ["Cash Withdraw", "Fast Cash", "Balance Inquiry"]
        },
        {
            name: "amount",
            message: "Please Enter Your Amount: ",
            when(atmTransaction){
                return atmTransaction.selectOpt == "Cash Withdraw";
            },
        },
        {
            name: "amount",
            message: "Please Select Amount: ",
            type: "list",
            choices: ["500", "1000", "2000", "3000", "5000", "10000"],
            when(atmTransaction){
                return atmTransaction.selectOpt == "Fast Cash";
            },
        },
    ]);

//console.log(atmTransaction);
    if(atmTransaction.selectOpt == "Balance Inquiry"){
        console.log(`Your New Balance is: Rs.  ${user.balance}`);
    }
    else{
        user.balance -= atmTransaction.amount;
        console.log(`Your New Balance is: Rs.  ${user.balance}`);
     
    }
    
}


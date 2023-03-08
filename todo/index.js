#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Project TODO"); // start animation here
    //let rainbowTitle = chalkAnimation.glitch("Lets Start Calculation"); // start animation here
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let todos = [];
let loop = true;
while (loop) {
    const resp = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "Please add in todo list: "
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more? ",
            default: false
        }
    ]);
    const { TODO, addMore } = resp;
    loop = addMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Please add a vlaid input!");
    }
}
if (todos.length > 0) {
    console.log("Todo List: ");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("TODO List is Empty!");
}

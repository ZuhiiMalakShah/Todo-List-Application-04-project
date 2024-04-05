#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Initiallizing user balance and pin code
let myBalance = 20000;
let mypin = 1234;
// Print welcome message
console.log(chalk.blue("\n \twelcome to Code with Zuhii - ATM Machine\n"));
let pinanswer = await inquirer.prompt({
    name: "pin",
    message: chalk.yellow("Enter your pin password"),
    type: "number",
});
if (pinanswer.pin === mypin) {
    console.log(chalk.green("\nYour Pin is Correct, Login Successfully!\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select options",
            type: "list",
            choices: ["withdraw", "Fast cash", "check balance"],
        },
    ]);
    // if user select withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`The remaining balance is ${balance}`);
        }
        else {
            console.log(chalk.red("You have Insufficient balance"));
        }
    }
    // if user select fast cash
    else if (operationAns.operation === "Fast cash") {
        let FastcashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "3000", "5000", "15000"],
            },
        ]);
        if (FastcashAns.amount <= myBalance) {
            let balance2 = myBalance - FastcashAns.amount;
            console.log(`the remaining balance is ${balance2}`);
        }
        else {
            console.log(`You have insufficient amount`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log(chalk.red("Your pin is Incorrect, Try Again"));
}

import inquirer from "inquirer";
let todoList = [];
console.log("Wecome to TODOlist");
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([{
            name: 'task',
            type: 'input',
            message: 'Enter your task',
        }
    ]);
    todoList.push(addtask.task);
    console.log(`${addtask.task}task added Sucessfully`);
    let addmoretask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task",
            default: "false",
        }
    ]);
    condition = addmoretask.addmore;
}
console.log(`${todoList}`);

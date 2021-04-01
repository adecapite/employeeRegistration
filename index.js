const inquirer = require('inquirer')
const fs = require('fs')
const employee = require('./library/employee')
const manager = require("./library/manager")
const enginner = require('./library/engineer')
const intern = require("./library/intern")
const { type } = require('os')

function startApp(){
    startPage();
    addEmployee();
}

function addEmployee(){
    inquirer.prompt([{
        type: 'input',
        message: "Enter employee's name.",
        name: 'employeeName' 
    },
    {
        type: 'list',
        message:  
    }
        
    ]

    )
}
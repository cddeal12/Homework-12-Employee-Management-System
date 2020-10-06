// Imports
const inquirer = require("inquirer");
const mysql = require("mysql");

// SQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: userName,
    password: userPass,
    database: ""
});

// Creates the appropriate database and tables if they have not already been created
function initialize() {
    connection.query(
        `CREATE DATABASE IF NOT EXISTS employeeDB;
        USE employeeDB;

        CREATE TABLE IF NOT EXISTS department (
            id INT AUTO_INCREMENT,
            name VARCHAR(30),
            PRIMARY KEY (id)
        );

        CREATE TABLE IF NOT EXISTS role (
            id INT AUTO_INCREMENT,
            title VARCHAR(30),
            salary DECIMAL(10,2),
            department_id INT,
            PRIMARY KEY (id)
        )

        CREATE TABLE IF NOT EXISTS employee (
            id INT AUTO_INCREMENT,
            first_name VARCHAR(30),
            last_name VARCHAR(30),
            role_id INT,
            manager_id INT NULL,
            PRIMARY KEY (id)
        )
        `, function(err, res) {
            if (err) throw err;
            console.log("Welcome to the Employee Database.")
        });
}


// Prompt Functions
function mainBranch() {
    inquirer.prompt([
        {
            type: "list",
            message: "What will you do?",
            name: "mainChoice",
            choices: ["Add to Database", "View Database", "Update Database"]
        }
    ]).then(function(response) {
        if (response.mainChoice === "Add to Database") {
            addBranch();
        } else if (response.mainChoice === "View Database") {
            viewBranch();
        } else if (response.mainChoice === "Update Database") {
            updateBranch();
        };
    });
};

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

initialize();

mainBranch();

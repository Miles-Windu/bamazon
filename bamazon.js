// Linking node packages and storing them into variables to easily call them later. 
var inquirer = require("inquirer");
var mysql = require("mysql");

// creating connection to database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Phyllis21",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    initializeApp();
  });

function initializeApp(){
    // saving my divider 
    var divider = "\n------------------------------------------------------------------------------------------\n";

    // Log out a welcome message for good customer service. 
    console.log("Hello! Welcome to Miles' online Music shop! Please take a look of our list of items below.");

    // Divider to section off images
    console.log(divider)

    // function to connect to the database and pull the items
    connection.query("SELECT * FROM products", function(err, res) {
        // handles errors
        if (err) throw err;

        // a loop that goes through each item in the table and console logs it for the customer to view.
        for(var i = 0; i < res.length; i++){
            console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity); 
        }

        // divider for looks
        console.log(divider);

        // ends connection
        shop();
    })

function shop(){
    inquirer
        .prompt([
            {
            type: "list",
            name: "item",
            message: "What would you like to do?",
            choices: ["Purchase Item", "Add Item"]
            }
        ])
    }
}
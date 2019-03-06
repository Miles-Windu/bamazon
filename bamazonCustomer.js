// Linking node packages and storing them into variables to easily call them later. 
var inquirer = require("inquirer");
var mysql = require("mysql");

// saving my divider globally... I think I'll need it pretty often
var divider = "\n------------------------------------------------------------------------------------------\n";

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

    console.log(divider);

    // Welcom online customer 
    console.log("Hello! Welcome to Miles' online Music shop! Please take a look of our list of instruments below.");
    startBuying(); 
    
  });


function startBuying(){

    // connect to the database and display table from mysql
    connection.query("SELECT * FROM bamazon.products", function(err, res){
        if(err) throw err
        console.table(res);
         
    // let's "purchaseItem" run after this value it turned to true.  
    isContentDisplayed = true;
    purchaseItem();
    })

 

var purchaseItem = function (){
    if(purchaseItem = true){
    // prompt buyer to select an item to purchase. 
        inquirer
            .prompt([
                {
                name: "selection",
                type: "input", 
                message: "What is the ID of the product you would like to buy?",
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many of these items would you like to purchase?"
                }
        ]).then(function(answer){
            // storing the choice to compare to the "ID" from the mysql table
            var choice = parseInt(answer.selection);
            var quantity = parseInt(answer.quantity); 

            connection.query("SELECT * FROM bamazon.products", function(err, res){
                if(err) throw err
                
                // loops through the array to find the matching id in the table 
                for(var i = 0; i < res.length; i++){
                    if(choice === res[i].id && quantity < 2){
                        // console log the selecation
                        console.log("You have chosen to purchase " + quantity + " " + res[i].product_name);
                    }
                    if(choice === res[i].id && quantity > 1){
                        // just adding an "s" for multiple quantities 
                        console.log("You have chosen to purchase " + quantity + " " + res[i].product_name + "s")
                    }                
                     // starts the process over if there aren't enough items in stock
                    if(choice === res[i].id && quantity > res[i].stock_quantity){
                        console.log("Insufficient quantity!");
                    }
                }
                connection.end();
            })
        })
    }
}

}
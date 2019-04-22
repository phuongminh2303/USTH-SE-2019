var moongose = require("mongoose");
var Food = require("../models/food");

var foodData = [
    // PIZZA
    {
        name: "Cheese Pizza",
        type: "pizza",
        cost: 10.05,
        image: "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Real cheese made from mozzarella, pizza sauce and buttery garlic crust."
    },
    {
        name: "Pepperoni Pizza",
        type: "pizza",
        cost: 10.95,
        image: "https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Premium pepperoni, real cheese made from mozzarella and buttery garlic crust."
    },
    {
        name: "Sausage Pizza",
        type: "pizza",
        cost: 11.25,
        image: "https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Sausage and real cheese made from mozzarella and buttery garlic crust."
    },
    {
        name: "Garden Pizza",
        type: "pizza",
        cost: 11.15,
        image: "https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Onions, sliced tomatoes, pizza sauce and signature three-cheese blend."
    },
    {
        name: "Spicy Pizza",
        type: "pizza",
        cost: 10.35,
        image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Spicy is not enough??? Try this! Then you will be surprised by its taste!!!"
    },
    {
        name: "Homemade Pizza",
        type: "pizza",
        cost: 10.20,
        image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Best pizza for a cozy holiday. Remind you of the pizza in your childhood!"
    },
    {
        name: "Jahu Pizza",
        type: "pizza",
        cost: 10.20,
        image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "From Jahu and nothing to complain. It's perfection of pizza!!!"
    },
    {
        name: "Red pepper Pizza",
        type: "pizza",
        cost: 10.20,
        image: "https://images.pexels.com/photos/1049620/pexels-photo-1049620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Red pepper, sliced tomatoes and pizza sauce combine together. That's crazy!"
    },

    // DRINKS
    {
        name: "Braxston Beer",
        type: "drink",
        cost: 129,
        image: "https://images.unsplash.com/photo-1547122719-ebf42306abd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60g",
        description: "200 calories"
    },
    {
        name: "Pepsi",
        type: "drink",
        cost: 120,
        image: "https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&fit=crop&w=500&q=60g",
        description: "200 calories"
    },
    {
        name: "Coke",
        type: "drink",
        cost: 19,
        image: "https://images.unsplash.com/photo-1520568444554-4698653b539c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "225 calories"
    },
    {
        name: "Juice",
        type: "drink",
        cost: 15,
        image: "https://images.unsplash.com/photo-1514995669114-6081e934b693?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "180 calories"
    },

];

function seedDB() {
    //Remove all pizza
    Food.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("Removed all foods in the database!");
        // add a few pizza
        foodData.forEach(function (seed) {
            Food.create(seed, function (err, food) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Added a new " + seed.type);
                }
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;

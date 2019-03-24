var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/new", function(req, res){
    res.render("signUp");
})



app.listen(3000, function(){
    console.log("Sever started at port 3000");
})
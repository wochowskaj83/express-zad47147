const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/express-zad47147");");

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.get('/', function(req, res){
    res.render("home", {title: 'My app title', content: "Lorem ipsum"});
});

app.listen(5500, function(){
    console.log('Serwer Node.js działa');
});
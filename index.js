const express = require('express');
const app = express();
const hbs = require('express-handlebars');

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.get('/', function(req, res){
    res.render("home");
});

app.listen(5500, function(){
    console.log('Serwer Node.js działa');
});
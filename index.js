const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/express-zad47147");

const userController = require('./app/controllers/UserController');



app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.get("/table", userController.index);

app.listen(5600, function () {
    console.log('Serwer Node.js działa');
});
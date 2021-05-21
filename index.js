const express = require("express");
const mongoose = require("mongoose");
var app = express();

const UserRouter = require("./Routes/user");

var bodyparser = require('body-parser');

var mydb = 'mongodb://localhost:27017/School'
mongoose.connect(mydb);

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use("/", UserRouter);

var port = 8080;

app.listen(port, function () {
    console.log('app listening on port' + port)
});
var express = require("express");
var path = require("path");
var logger = require("morgan");
require('dotenv').config();
// imports connect function; ending params invoke it
require("./models/setupMongo")();

var todoRouter = require("./routes/todo");
var authRouter = require("./routes/auth");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/todo", todoRouter);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;

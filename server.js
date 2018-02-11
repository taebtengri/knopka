var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var express = require("express");
var session = require('express-session');
var env = require('dotenv').load();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/public', express.static('public'));

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

app.get("/", function(req, res) {

  res.sendFile(path.join(__dirname, "/public/index.html"));

});

app.get("/knopka", function(req, res) {

  res.sendFile(path.join(__dirname, "/public/knopka.html"));

});

app.get("/duyme", function(req, res) {

  res.sendFile(path.join(__dirname, "/public/duyme.html"));

});
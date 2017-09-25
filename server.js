// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Initialize app
var app = express();

// Set port to be able to grab port given by heroku
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static(path.join(__dirname, "./app/public")));

// Require routes
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);

// Listen on port
app.listen(PORT, function() {
    console.log("Friend Finder is listening on port: " + PORT);
});
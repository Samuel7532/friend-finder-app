// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// Basic route that sends the user first to the AJAX Page
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
app.listen(PORT, function(){
    console.log("LIstening on " + PORT);
});
  
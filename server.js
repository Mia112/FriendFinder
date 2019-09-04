// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



var app = express();

// create a port to be sent by Heroku 
var PORT = process.env.PORT || 8080;

// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(express.urlencoded())
//makes static assets in the public folder available (style.css)
app.use(express.static("app/public"));


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


 // set up a listener on the port
app.listen(PORT, () => console.log("App listening on PORT " + PORT));



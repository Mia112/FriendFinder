// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



var app = express();

// create a port to be sent by Heroku 
var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.static("app/public"));


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


 // set up a listener on the port
app.listen(PORT, () => console.log("App listening on PORT " + PORT));



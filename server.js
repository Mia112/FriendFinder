//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);

// Hey, Node - we have an express app
var app = express();

// create a port for localhost(using postman in this instance)
var PORT = process.env.PORT || 8080;

// express middleware for serving static files 
app.use(express.static("app/public"));


// set up body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text({type: "text/html"}));
app.use(bodyParser.json({type: "application/*+json" }));
app.use(bodyParser.raw({type: "application/vnd.custom-type"}));


//all of the other routs
 apiRoutes = require("./app/routing/apiRoutes.js")(app);

 //html route
 htmlRoutes = require("./app/routing/htmlRoutes.js")(app);

 // set up a listener on the port
app.listen(PORT, () => console.log("App listening on PORT " + PORT));



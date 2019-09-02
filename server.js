// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Hey, Node - we have an express app
var app = express();

// create a port to be sent by Heroku 
var PORT = process.env.PORT || 8080;

// express middleware for serving static files 
app.use(express.static("app/public"));


// set up body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))


// app.use(express.json());
// app.use(express.urlencoded({extended:true}));


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



// //all of the other routs
//  apiRoutes = require("./app/routing/apiRoutes.js")(app);

// //  //html route
// //  htmlRoutes = require("./app/routing/htmlRoutes.js")(app);

 // set up a listener on the port
app.listen(PORT, () => console.log("App listening on PORT " + PORT));




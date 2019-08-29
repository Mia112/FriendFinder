
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

 apiRoutes = require("./app/routing/apiRoutes.js")(app);
 htmlRoutes = require("./app/routing/htmlRoutes.js")(app);

// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use('/assets', express.static('assets'));
app.use(express.static('app/public'));


// app.use(apiRoutes);
// app.use(htmlRoutes);

app.listen(PORT, () => console.log("App listening on PORT " + PORT));



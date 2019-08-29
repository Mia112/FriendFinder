
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// app.use('/assets', express.static('assets'));
app.use(express.static('app/public'));



 apiRoutes = require("./app/routing/apiRoutes.js")(app);
 htmlRoutes = require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, () => console.log("App listening on PORT " + PORT));



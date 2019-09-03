
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');



// ROUTING

module.exports = function (app) {


	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// every other url path will take us to the home.html page
	app.get("*", function(req, res) {
	
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	// // If no matching route is found default to home
	// app.use(function (req, res) {
	// 	res.sendFile(path.join(__dirname + '/../public/home.html'));
	// });
};

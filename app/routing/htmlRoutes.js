const path = require('path');

//catch all routes for home page
module.exports = function(app) {
  //GET route for survey page
  app.get('/survey',function (req, res) { 
    res.sendFile(path.join(__dirname, "/ ../public/survey.html"));
  });

  app.use(function (req, res) { 
    res.sendFile(path.join(__dirname, "/ ../public/home.html"));
  });

}



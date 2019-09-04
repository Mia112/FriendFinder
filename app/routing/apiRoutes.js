// var path = require("path")
// var friends = require("../app/data/friends");
var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    module.exports = function(app) {

      app.get("/api/friends", function(req, res) {
        res.json(friends);
      });
    
      // handle the post request 
      app.post("/api/friends", function(req, res) {
        
        // begin by setting up the array hoding the user's answers
        var newFriend = req.body.scores;
        // convert the values in surveyResults to integers
        for (var i=0; i<newFriend .length; i++) {
          newFriend [i] = parseInt(newFriend [i]);
        }
    
      
        var bestDifference = 999999;
        var bestMatch = 0; 
       
        for (i=0; i < friends.length; i++) {
    
        
          var tempDifference = difference(newFriend , friends[i].scores);
    
          // console log the difference between user choices and pet being compared
          console.log("difference between", newFriend , "and", friends[i].name, friends[i].scores, "=", tempDifference);
    
       
          if (tempDifference < bestDifference) {
            bestDifference = tempDifference;
            bestMatch = i;
          }
        }
    
       
        function difference(array1, array2) {
    
          
          var differenceAmount=0;
          
          for (var i=0; i<array1.length; i++) {
            differenceAmount += Math.abs(array1[i] - array2[i]);
          }
          
          return differenceAmount;
        }
    
        res.send(friends[bestMatch]);
      });
    };

} 
        
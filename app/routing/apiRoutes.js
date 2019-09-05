
var friends = require('../data/friends.js');

module.exports = function (app) {
   // API GET a Request
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    
 
      // user input get submited to the server.
      app.post("/api/friends", function(req, res) {

        // console.log(req.body)
    // this empty object will hold the "best match". 
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var newFriend = req.body;
    var userScores = newFriend.scores;
    console.log(newFriend.scores);

    var totalDifference = 0;

    // Here we loop through all the friend possibilities in the database.
    for (var i = 0; i < friends.length; i++) {

      
      totalDifference = 0;

       // We then loop through all the scores of each friend
       for (var j = 0; j < friends[i].scores[j]; j++) {

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        // If the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.friendDifference) {

          // Reset the bestMatch to be the new friend.
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
          
        }
      }
    }
    friends.push(newFriend);

    res.json(bestMatch);

  });

};
        
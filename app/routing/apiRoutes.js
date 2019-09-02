// var path = require("path")
// var friends = require("../app/data/friends");
var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var newFriends = req.body;
        var userScores = newFriends.scores;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        for (var i = 0; i < friends.length; i++) {
            var scoresDiff = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {
                scoresDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));



                // If the sum of differences is less then the differences of the current "best match"
                if (scoresDiff <= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new friend.
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = scoresDiff;
                }

            }
        }

        // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
        // the database will always return that the user is the user's best friend).
        friends.push(newFriends);

        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
        res.json(bestMatch);

    });

};
var friends = require('../data/friends.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


module.exports = function (app) {
    // //api GET request for friends json
    // app.get("/api/friends", function (req, res) {
    //     res.json(friends);
    // });


    //api GET route for friends json
app.get('/api/friends', function (req, res) {
    res.json(friends);
});
    //post route to submit new friend
    app.post("/api/friends", function (req, res) {
        const totalDifference = 0;
        const bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        const userData = req.body;
        const userName = userData.name;
        const userScores = userData.scores;

        const b = userScores.map(function(item) {
            return parseInt(item, 10);
        });

        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };
        console.log("Name: " + userName);
        console.log("User score: " + userScores);

        const sum = b.reduce((a, b) => a + b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + bestMatch.friendDifference)
        console.log("+++++++++++++============================================");

        for(let i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;
            console.log("Total Diff " + totalDifference);
            console.log("Best match freiend diff " + bestMatch.friendDifference);

            const bestFriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bestFriendScore);
            totalDifference += Math.abs(sum - bestFriendScore);
            console.log("-----------------------------> " + totalDifference);

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;

            }
            console.log(totalDifference + "Total Difference");
        }


        console.log(bestMatch);
        friends.push(userData);
        console.log("New User added");
        console.log(userData);
        res.json(bestMatch);

    });



// //post route to submit new friend
// app.post('/api/friends', function (req, res) {
//     var newFriend = req.body;
//     //initialize bestMatch number that starts at the highest possible variance
//     var bestMatch = 40;
//     var matchedFriend = {};
//     var variance;
//     //select each friend from the group
//     matches.forEach(friend => {
//         variance = 0;
//         //Compare each friend score to the score of the new friend 
//         for (var i = 0; i < friend.scores.length && i < newFriend.scores.length; i++) {
//             //Add up the absolute difference from comparing each of their score
//             variance += Math.abs(parseInt(friend.scores[i]) - parseInt(newFriend.scores[i]));
//         }
//         //compare the total difference to the highest possible difference
//         if (variance <= bestMatch) {
//             //if the difference is less or equal, the difference is now the best matched
//             bestMatch = variance;
//             //create a new object of the matched friend to be send back in the response
//             matchedFriend = {
//                 name: friend.name,
//                 image: friend.image,
//                 score: bestMatch
//             };
//         }
//     });
//     matches.push(newFriend);
//     //send the matched friend back
//     res.json(matchedFriend);

// });


};
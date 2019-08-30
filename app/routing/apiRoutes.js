var friends = require('../data/friends.js');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
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
        var userData = req.body;
       
        const totalDifference = 0;
       
        const matched = {
            name: "",
            photo: "",
            friendDifference: 100
            
        };
     
       
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        };
        // console.log(req.body);
        console.log("Name: " + userData.name);
        console.log("User score: " + userData.scores);

        const sum = userData.scores.reduce((a, b) => a + b, 0);
        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + matched.friendDifference)
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

            if (totalDifference <= matched.friendDifference) {
                matched.name = friends[i].name;
                matched.photo = friends[i].photo;
                matched.friendDifference = totalDifference;

            }
            console.log(totalDifference + "Total Difference");
        }


        console.log(matched);
        friends.push(userData);
        console.log("New User added");
        console.log(userData);
        res.json(matched);

    });



};
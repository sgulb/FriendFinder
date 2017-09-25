var path = require("path");

// Require friends.js and set as variable
var friends = require("../data/friends.js");

// Export api routes
module.exports = function(app) {

    // List of all friends
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });

    // Add new friend to server
    app.post("/api/friends", function(req, res) {
        
        // Set variable for the top match using the find match function passing in req.body
        var topMatch = findMatch(req.body);

        // Push the current user input to friends.js
        friends.push(req.body);
        res.json(topMatch);
    });
}

function compare (newUser, friend) {

    // Variable set to calculate answer difference
    var ansDiff = 0;

    // Loop through answers of the new user and all friends in friends.js
    for (var j = 0; j < newUser.answers.length; j++) {

        // ansDiff calculated by the absolute value of newUser answers - friend answers
        ansDiff += Math.abs(newUser.answers[j] - friend.answers[j]) 
    }
    return ansDiff;
}

function findMatch (newUser) {

    // Create variable to target the index of the top match
    var matchIndex = 0;

    // Variable with a big number to use for comparison of user answers
    var matchDiff = 500;

    // Loop through friends.js array
    for (var i = 0; i < friends.length; i++) {
        
        // Run compare() passing in newUser and friends[i] to compare newUser to all in friends.js
        var difference = compare(newUser, friends[i]);

        // When lowest difference is found
        if (difference < matchDiff) {
            matchDiff = difference;
            matchIndex = i;
        }
    }
    return friends[matchIndex];
}




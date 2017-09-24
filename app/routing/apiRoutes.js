var path = require("path");

// Require friends.js and set as variable
var friends = require("../data/friends.js");

// Export api routes
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    });
}
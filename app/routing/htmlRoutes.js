// Require dependency
var path = require("path");

module.exports = function(app) {

    // Route that sends user to the home page where home.html is served
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
    
    // Route that sends user to the survey page where survey.html is served
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });
}
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }

res.redirect("/signup")
   });

  app.get("/signup", function(req, res) {
    if (req.user) {
      console.log("signup",req.user)
      res.redirect("/members");
    }

  res.render("signup")
  });

  app.get("/members", isAuthenticated, function(req, res) {

  res.render("members")
  });

  app.get("/maps", function(req, res) {

    res.render('maps');
  });


  app.get("/login", function(req, res) {

  res.render("login")
  });
}

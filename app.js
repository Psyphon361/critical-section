const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));


app.get("/", function(req, res) {

    res.render("home", {
        title: "Bitly | Custom URL Shortener"
    });
});

app.get("/contests", function(req, res) {

    res.render("contests", {
        title: "Bitly | Custom URL Shortener"
    });
});


app.get("/leaderboard", function(req, res) {

    res.render("leaderboard", {
        title: "Bitly | Custom URL Shortener"
    });
});


app.get("/practice", function(req, res) {

    res.render("practice", {
        title: "Bitly | Custom URL Shortener"
    });
});


app.get("/profile", function(req, res) {

    res.render("profile", {
        title: "Bitly | Custom URL Shortener"
    });
});

app.get("/register-contest", function(req, res) {

    res.render("register-contest", {
        title: "Bitly | Custom URL Shortener"
    });
});

app.get("/sign-in", function(req, res) {

    res.render("sign-in", {
        title: "Bitly | Custom URL Shortener"
    });
});

app.get("/sign-up", function(req, res) {

    res.render("sign-up", {
        title: "Bitly | Custom URL Shortener"
    });
});

app.get("/registration", function(req, res) {

    res.render("registration", {
        title: "Bitly | Custom URL Shortener"
    });
});





let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
    console.log("Server started on port 3000!");
});
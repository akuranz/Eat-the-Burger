var burger = require("../models/burgers");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

module.exports = router;

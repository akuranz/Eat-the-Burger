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

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    }
  );
  console.log(req.body);
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("reqBody", req.body.devoured);
  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured !== "true"
    },
    condition,
    function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        console.log("404", result);
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

module.exports = router;

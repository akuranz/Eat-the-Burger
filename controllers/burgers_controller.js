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

// router.post("/api/burgers", function(req, res) {
//   burger.create(
//     ["burger_name", "devour"],
//     [req.body.name, req.body.devour],
//     function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     }
//   );
// });

module.exports = router;

// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  selectAll: function() {},
  insertOne: function() {},
  updateOne: function() {}
};

// Export the orm object for the model.
module.exports = orm;

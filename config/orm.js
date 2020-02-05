// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = `SELECT * FROM ??`;
    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function() {},
  updateOne: function() {}
};

// Export the orm object for the model.
module.exports = orm;

// Import the ORM to implement functions that will interact with the database
let orm = require('../config/orm.js');

// Create burger object
const burger = {

  all: function (cb) {
    orm.all('burgers', function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (colVals, condition, cb) {
    orm.updateOne('burgers', colVals, condition, function (res) {
      cb(res);
    });
  }
};
// Export the database functions for the controller (burgerController.js).
module.exports = burger;
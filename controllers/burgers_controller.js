//assignment dependencies
const express=require(`express`);
const router = express.Router();

//creating global variable using let to be used inside routes
const burger = require(`../models/model-burger.js`);

//Creating the routes the controller handles and directs
router.get(`/`, function (req, res) {
    burger.all(function(dbInfo) {
        let objectForHandlebars= {
            burgers: dbInfo
        };
        console.log(objectForHandlebars);
        res.render(`index`, objectForHandlebars);
    });
});

router.post("/api/newburger", function(req, res) {
  console.log(`This is req.body: ${req.body}`);
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


router.put("/api/burger/devour/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.


module.exports = router;
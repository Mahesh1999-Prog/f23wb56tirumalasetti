var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fruit', { title: 'Fruit Class' });
});

module.exports = router;

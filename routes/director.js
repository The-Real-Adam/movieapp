var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello this is your director speaking');
});

router.get('/:id', function(req, res, next) {
  res.send('Hello this is your director ID');
});

router.post('/', function (req, res, next) {
  res.send('Hello this is your director getting a thing');
});

router.patch('/:id', function (req, res, next) {
  res.send('Hello this is your director updating a thing');
});

router.delete('/:id', function (req, res, next) {
  res.send('Hello this is your director deleting');

});

module.exports = router;

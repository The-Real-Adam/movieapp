var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello this is your movie speaking');
});

router.get('/:id', function(req, res, next) {
  res.send('Hello this is your movie ID');
});

router.post('/', function (req, res, next) {
  res.send('Hello this is your movie getting a thing');
});

router.patch('/:id', function (req, res, next) {
  res.send('Hello this is your movie updating a thing');
});

router.delete('/:id', function (req, res, next) {
  res.send('Hello this is your movie deleting');

});


module.exports = router;

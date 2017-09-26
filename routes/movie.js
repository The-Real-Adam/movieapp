const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello this is your movie speaking');
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id

  knex('movie')
    .select('id', 'item')
    .orderBy('id')
    .where('id', id)
    .then((items) => {
      if (items.length < 1) {
        return res.sendStatus(404)
      }

      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(items[0]))
    })
    .catch((err) => next(err))
});

router.post('/', function(req, res, next) {

});

router.patch('/:id', function(req, res, next) {
  res.send('Hello this is your movie updating a thing');
});

router.delete('/:id', function(req, res, next) {
  res.send('Hello this is your movie deleting');

});


module.exports = router;

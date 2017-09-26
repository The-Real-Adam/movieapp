const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('director')
    .select('id', 'name', 'nationality')
    .orderBy('id')
    .then((director) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(director))
    })
    .catch((err) => next(err))
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id

  knex('director')
    .select('id', 'name', 'nationality')
    .orderBy('id')
    .where('id', id)
    .then((director) => {
      if (director.length < 1) {
        return res.sendStatus(404)
      }

      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(director[0]))
    })
    .catch((err) => next(err))
});

router.post('/', function (req, res, next) {
    knex('director')
      .insert({
        name: req.body.name,
        nationality: req.body.nationality
      }, '*')

      .then((director) => {
        console.log("director: ", director[0]);
        res.send(director[0]);
      })

      .catch((err) => next(err))
});

router.patch('/:id', function (req, res, next) {
  const id = Number.parseInt(req.params.id)
  
  knex('director')
    .where('id', req.params.id)
    .first()
    .then((director) => {
      if (!director) {
        return next();
      }

      return knex('director')
        .update({ name: req.body.name, nationality :req.body.nationality }, '*')
        .where('id', req.params.id);
    })
    .then((director) => {
      res.send(director[0]);
    })
    .catch((err) => next(err))
});

router.delete('/:id', function (req, res, next) {
  res.send('Hello this is your director deleting');

});

module.exports = router;

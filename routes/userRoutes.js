const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

// router.post('/signup', (req, res) => {
//   knex('people').insert(req.body, '*').then(registerPerson => res.json(registerPerson))
// })

router.post('/login', (req, res) => {
  knex('user').where('email', req.body.email)
    .then(loginPerson => {
      if (loginPerson.length > 0) {
        if (loginPerson.password === req.body.password) {
          res.json(loginPerson)
        } else {
          res.sendStatus(400)
        }
      }
    }).catch(err => res.json(err))

})



module.exports = router;

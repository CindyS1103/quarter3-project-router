const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

router.get('/messages', (req, res) => {
  knex('contacts')
    .then(contacts => res.json(contacts))
})

router.get('/messages/:id', (req, res) => {
  knex('contacts')
    .where('id', req.params.id)
    .then(message => res.json(message))
})
router.post('/messages', (req, res) => {
  knex('contacts')
    .insert(req.body, '*')
    .then(newMessage=> res.json(newMessage))
})

router.delete('/messages/:id', (req, res) => {
  knex('contacts')
    .where('id', req.params.id)
    .del()
    .returning('*')
    .then(deletedMessage => res.json(deletedMessage))
})



module.exports = router;

const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

router.get('/blog', (req, res) => {
  knex('blog')
    .then(blogs => res.json(blogs))
})

router.get('/blog/:id', (req, res) => {
  knex('blog')
    .where('id', req.params.id)
    .then(blog_post => res.json(blog_post))
})

router.post('/blog', (req, res) => {
  knex('blog')
    .insert(req.body, '*')
    .then(newBlog => res.json(newBlog))
})

router.patch('/blog/:id', (req, res) => {

  knex('blog')
    .update(req.body)
    .then(updatedBlog => {
      knex('blog').then(posts => res.json(posts))
    })
})

router.delete('/blog/:id', (req, res) => {
  knex('blog')
    .where('id', req.params.id)
    .del()
    .returning('*')
    .then(deletedBlog => res.json(deletedBlog))
})










module.exports = router;

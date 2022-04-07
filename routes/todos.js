const express = require('express')
const checkAuth = require('../checkAuth')
const router = express.Router()
const models = require('../models')

// GET /api/v1/todos
router.get('/', checkAuth, (req, res) => {
  models.Todo.findAll({ where: { UserId: req.user.id }})
  .then(todos => {
    res.json(todos)
  })
})


// POST /api/v1/todos
router.post('/', checkAuth, (req, res) => {
  // check required fields
  if(!req.body.title || !req.body.description || !req.body.dueDate || !req.body.tag) {
    res.status(400).json({ error: 'Please include all fields' })
    return
  }
  // create new todo 
  models.Todo.create({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    tag: req.body.tag,
    UserId: req.user.id
  })
  // respond to client with new todo
  .then(todo => {
    res.status(201).json(todo)
  })
})


// DELETE /api/v1/todos/9
router.delete('/:id', checkAuth, (req, res) => {
  // remove todo with id as long as user is logged in
  models.Todo.destroy({ where: {
    id: req.params.id, 
    UserId: req.user.id 
  }})
  .then(numberDeleted => {
    // if nothing was deleted return error
    if (numberDeleted === 0) {
      res.status(404).json({ error: 'Could not find that todo' })
      return
    }
    // if deleted send success message
    res.json({ success: 'Todo deleted successfully' })
  })
})


module.exports  = router
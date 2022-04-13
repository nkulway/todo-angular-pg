require('dotenv').config()
var express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var router = express.Router();
const models = require('../models')

/* POST api/v1/users/register */
router.post('/register', function (req, res, next) {
if (!req.body.username || !req.body.password) {
  res.status(400).json({ error: 'Please include all required fields' })
}
  // check if email in use
  models.User.findAll({
      where: {
        username: req.body.username
      }
    })
    .then((users) => {
      // if it is, send error
      if (users.length > 0) {
        res.status(400).json({
          error: 'username already in use'
        })
        return
      }
      // if not, create new user
      // hash password
      bcrypt.hash(req.body.password, 10)
        .then(hash => {
          // store in db
          models.User.create({
              username: req.body.username,
              password: hash
            })
            .then(user => {
              // send back new user
              res.status(201).json(user)
            })
        })
    })
});

router.post('/login', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ error: 'Please include all required fields' })
    return
  }
  // check for user with email
  models.User.findOne({ where: { username: req.body.username } })
    .then(user => {
      // if no user, send error
      if (!user) {
        res.status(404).json({ error: 'Could not find an account with that username' })
        return
      }
  // check password against hash in db
  bcrypt.compare(req.body.password, user.password)
      .then(match => {
        // if no match, send error
        if (!match) {
        res.status(400).json({ error: 'Password incorrect' })
        return
        }
        //convert from sequelize object to plain object
        const token = jwt.sign(user.get({ plain: true }), process.env.JWT_SECRET)

        // send success response
        res.json({ success: 'logged in', token })
        res.send({token})
        return
      })
   })
})

module.exports = router;
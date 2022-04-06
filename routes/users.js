var express = require('express');
const bcrypt = require('bcrypt')
var router = express.Router();
const models = require('../models')

/* POST api/v1/users/register */
router.post('/register', function (req, res, next) {
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

module.exports = router;
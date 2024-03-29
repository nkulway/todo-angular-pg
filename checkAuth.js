require('dotenv').config()
const jwt = require('jsonwebtoken')

// Use this fx to protec all of the routes
function checkAuth(req, res, next) {

  const token = req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    res.status(401).json({ error: 'please send valid token' })
    return
  }

  req.user = jwt.verify(token, process.env.JWT_SECRET)

  if(!req.user) {
    res.status(401).json({ error: 'please send valid user' })
  }

  next()
}

module.exports = checkAuth;
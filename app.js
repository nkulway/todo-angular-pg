require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const models = require('./models')
const cors = require('cors')

var usersRouter = require('./routes/users');
var todosRouter = require('./routes/todos');

var app = express();
app.use(cors())


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/dist/todo-angular-pg')));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/todos', todosRouter);

// let angular handle all routing that isn't /api
app.get('*', (req,res)=> {
  res.sendFile(path.resolve(__dirname, 'client/dist/todo-angular-pg/', 'index.html'))
})




module.exports = app;

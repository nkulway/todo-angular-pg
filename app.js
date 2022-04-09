var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const models = require('./models')
const cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todosRouter = require('./routes/todos');

var app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/dist')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/todos', todosRouter);

// models.Todo.create({
//   title: 'Create app',
//   description: 'Build application using Angular and Postgres',
//   dueDate: 'April 11th, 2022',
//   tag: '#letsgo',
//   UserId: 1
// })

module.exports = app;

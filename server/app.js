import express from 'express'
import connectDb from './schemas/index.js'
import userRouter from "./routes/user.routes.js";

connectDb()


// const createError = require('http-errors');

// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const port = 3030;

// const indexRouter = require('./routes/index');

const app = express();
// connect();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser(process.env.JWT_SECRET));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);

// app.listen(port, () => console.log(port));
app.listen(3001, () => console.log('Listenning'));

app.use(userRouter)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
// });

// module.exports = app;
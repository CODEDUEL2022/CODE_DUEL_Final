require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const passport = require('passport');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require("./passport")(app);
const isAuthenticated = require("./authentication")


app.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get('/login', function(req, res){
  res.sendFile(__dirname + '/◇◇/login.html');
});

app.get('/success', function(req, res){
  res.send("ログインに成功")
})

app.get('/test', isAuthenticated.isAuthenticated, function(req, res) {
  res.send("ここに来れてるってことはログイン情報が保存されてるよ")
})

app.get('/auth/google/callback', 
    passport.authenticate('google',{
      session: true
    }),
    function(req, res){
        res.redirect(200, '/success')
})


app.use('/', isAuthenticated.isAuthenticated, indexRouter);
app.use('/users', isAuthenticated.isAuthenticated, usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

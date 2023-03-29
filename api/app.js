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
// app.use(
//   cors({
//     origin: '*',
//     methods: "GET, POST, PATCH, DELETE, PUT",
//     allowedHeaders: "Content-Type, Authorization",
//     credentials: true,
//     optionsSuccessStatus: 200,
//   })
// );
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require("./passport")(app);
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {  // 認証済
    console.log("認証されました")
    return next();
}
else {  // 認証されていない
    console.log(req.isAuthenticated())
    res.redirect('/auth/google');  // ログイン画面に遷移
}
}


app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
  })
);

app.get('/api/test', isAuthenticated, function(req, res) {
  res.send(req.cookies.name)
})

app.get('/auth/google/callback', 
    passport.authenticate('google',{
      session: true
    }),
    function(req, res){
      res.cookie('id', req.user.id, {
        secure: false
      })
      res.cookie('name', req.user.name, {
        secure: false
      })
      res.redirect(200, 'http://localhost:8080/top')
})

require("./routes/index")(app);

// app.use('/api', indexRouter);
app.use('/users', isAuthenticated, usersRouter);

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

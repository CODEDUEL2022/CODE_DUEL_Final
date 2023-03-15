require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const authentication = require('./authentication.js')
const app = express();
const cors = require('cors')
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: "hoge",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, { id: user.id, name: user.name });
});

passport.deserializeUser(function(user, done) {
  console.log(user.id)
  console.log(user.name)
  done(null, { id: user.id, name: user.name });
});

passport.use(new GoogleStrategy({
        clientID: process.env.CLIANT_ID,
        clientSecret: process.env.CLIANT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback"
    }, function(accessToken, refreshToken, profile, done){
      if(profile){
        return done(null, { id:profile.id, name:profile.displayName });
      }else{
        return done(null, null);
      }
    }
));

function isAuthenticated(req, res, next){
  if (req.isAuthenticated()) {  // 認証済
      return next();
  }
  else {  // 認証されていない
      console.log(req.isAuthenticated())
      res.redirect('/auth/google');  // ログイン画面に遷移
  }
}


app.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get('/login', function(req, res){
  res.sendFile(__dirname + '/◇◇/login.html');
});

app.get('/success', function(req, res){
  res.send("ログインに成功")
})

app.get('/test', isAuthenticated, function(req, res) {
  res.send("ここに来れてるってことはログイン情報が保存されてるよ")
})

app.get('/auth/google/callback', 
    passport.authenticate('google',{
      session: true
    }),
    function(req, res){
        res.redirect(200, '/success')
})


app.use('/', isAuthenticated, indexRouter);
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

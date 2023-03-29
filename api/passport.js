const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const secret = "secretCuisine123";
const session = require('express-session');
const userController = require('./controllers/userController')

module.exports = function (app) {
    app.use(session({
        secret: secret,
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser(function (user, done) {
        //ここにログイン処理を書くべきか否か
        //フロントでuserの情報を取得出来るなら、フロントでやった方が絶対に良い
        //呼ぶべきはcreateUser
        done(null, { id: user.id, name: user.name });
    });

    passport.deserializeUser(function (user, done) {
        try {
          const userInfo = userController.findUser(user.id)
          done(null, { id: userInfo.id, name: userInfo.name });
        } catch (error) {
          done(error, null);
        }
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
};
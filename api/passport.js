const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const secret = "secretCuisine123"; //TODO: 本来はenvに入れるべきだから、後ほど作業
const session = require('express-session');
const userController = require('./controllers/userController')

module.exports = function (app) {
    app.use(session({
        secret: secret,
        maxAge: 24 * 60 * 60 * 1000, //COMMENT: セッション有効期限を1日に設定
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true }
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new GoogleStrategy({
        clientID: process.env.CLIANT_ID,
        clientSecret: process.env.CLIANT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback"
    }, function(request, accessToken, refreshToken, profile, done){
            return done(null, { id:profile.id, name:profile.displayName });
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, { id: user.id, name: user.name });
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    
};
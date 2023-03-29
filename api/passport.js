const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const secret = "secretCuisine123";
const session = require('express-session');

module.exports = function (app) {
    app.use(session({
        secret: "hoge",
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    passport.serializeUser(function (user, done) {
        done(null, { id: user.id, name: user.name });
    });

    passport.deserializeUser(async function (user, done) {
        // try {
        //   const user = await User.findById(id);
        //   done(null, user);
        // } catch (error) {
        //   done(error, null);
        // }
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
};
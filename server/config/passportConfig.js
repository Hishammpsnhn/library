const passport = require('passport')
const { Strategy } = require('passport-local');
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const Users = require('../models/userModel');
var GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(
  new Strategy(
    {
      usernameField: 'email',

    },
    async (email, password, done) => {
      console.log(email, password)
      try {
        if (!email || !password) throw new Error('not get credentials')
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) throw new Error("user doesn't existed");
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) throw new Error("incorrect password")
        if (isPasswordCorrect) {
          console.log("auth success")
          done(null, existingUser)
        } else {
          console.log("failed to authenticate")
          done(null, null);
        }
      } catch (error) {
        console.log(error)
      }
    }
  )
);


const GOOGLE_CLIENT_ID = "634418605484-cr32sgnhl2ooup3fv7443t7f228c6d1m.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
},

   function (accessToken, refreshToken, profile, done) {

    userModel.findOne({ 'googleId': profile.id }, async  (err, user)=> {
      if (err) return done(err);
      if (user) {
        return done(null,user);
      }else{
        const user = await Users.create({
          name: profile._json.name,
          email: profile._json.email,
          pic:profile._json.picture,
          googleId: profile.id
        });
        return done(null,user);
      }
    })
  }


));


passport.serializeUser(function (user, done) {
  console.log("Called serializeUser");
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log("Called deserializeUser");
  userModel.findById(id, function (err, user) {
    done(err, user);
  });
});


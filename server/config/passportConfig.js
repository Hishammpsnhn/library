const passport = require('passport')
const { Strategy } = require('passport-local');
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const Users = require('../models/userModel');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

//local strategy
passport.use(
  new Strategy({ usernameField: 'email', },
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


//google strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/auth/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    userModel.findOne({ 'googleId': profile.id }, async (err, user) => {
      if (err) return done(err);
      if (user) {
        return done(null, user);
      } else {
        const user = await Users.create({
          name: profile._json.name,
          email: profile._json.email,
          pic: profile._json.picture,
          googleId: profile.id
        });
        return done(null, user);
      }
    })
  }
));

// insert user in session
passport.serializeUser(function (user, done) {
  console.log(user);
  done(null, user.id);
});

//fetch user from session
passport.deserializeUser(function (id, done) {
  userModel.findById(id, function (err, user) {
    done(err, user);
  });
});


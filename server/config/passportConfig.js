const passport = require('passport')
const { Strategy } = require('passport-local');
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');


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
        if (!isPasswordCorrect)  throw new Error("incorrect password")
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
)

passport.serializeUser(function (user, done) {
  console.log("Called serializeUser");
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log("Called deserializeUser");
  userModel.findById(id, function (err, user) {
    done(err, user);
  });
});


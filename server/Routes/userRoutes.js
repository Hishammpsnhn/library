const express = require('express');
const passport = require('passport');
const { registerUser, CheckLoginUser,forgotPasswordEmail,forgotPasswordOtp, addAdress } = require("../controllers/userControl");
const { protect } = require('../middleware/protect');

const router = express.Router();

//register User
router.route("/register").post(registerUser)

//check user is alredy loggedin or not
router.route("/").get(CheckLoginUser)

//passport localStrategy Login 
router.post('/login', passport.authenticate('local', {
  successRedirect: 'http://localhost:3000/',
  failureRedirect: '/api/auth/login',
  failureFlash: true
}))

//login failed
router.get('/login/failed', (req, res) => {
  res.status(404).json({ message: "login by gooogle failed" });
})

//login success
router.get('/login/sucess', (req, res) => {
  if (req.user) {
    res.status(200).json({ message: "login by gooogle sucess" });
  }
})

//login useing googleStrategy
router.get('/google',passport.authenticate('google', { scope: ['profile', 'email'] }));

//callback from googleStrategy
router.get('/google/callback', passport.authenticate('google', {
  successRedirect: 'http://localhost:3000/',
  failureRedirect: '/login/failed',
}))


router.post('/forgot-password/email',forgotPasswordEmail)
router.post('/forgot-password/otp',forgotPasswordOtp)

//add address
router.route('/user-address').post(protect,addAdress)

module.exports = router;
const express = require('express');
const passport = require('passport');
const { registerUser, loginUser } = require("../controllers/userControl")

const router = express.Router();

//passport Login 
router.post('/login', passport.authenticate('local', {
  successRedirect: '/api/auth/logined',
  failureRedirect: '/api/auth/login',
  failureFlash: true
}))

//register User
router.route("/register").post(registerUser)

//login user
router.get("/logined", loginUser)


module.exports = router;
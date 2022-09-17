const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const flash = require('connect-flash');

dotenv.config()
const app = express();
//accept json data
app.use(express.json()); 


// Passport Config
require('./config/passportConfig');


// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next) => {
  console.log(req.session)
  console.log(req.user)
  next();
})

// Connect flash
app.use(flash());

// Global variables
// app.use(function(req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   next();
// });

// Routes
app.use('/api/product', require('./Routes/productRoutes'));
app.use('/api/auth', require('./Routes/userRoutes'));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`server runnig on PORT : ${PORT}`))
  )
  .catch((err) => console.log(err.message));

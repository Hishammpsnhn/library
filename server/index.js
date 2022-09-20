const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');


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
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.CONNECTION_URL,
      collectionName: 'session'
    }),
    cookie:{
      maxAge: 1000 *60 * 60 * 60 * 24 
    }
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.session)
  console.log("req.user", req.user)
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

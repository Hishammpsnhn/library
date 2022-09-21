const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
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

// Routes
app.use('/api/product', require('./Routes/productRoutes'));
app.use('/api/auth', require('./Routes/userRoutes'));

//server and db setup
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

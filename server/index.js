const express = require("express");
const app = express();
const dotenv = require("dotenv");
const http = require("http");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");   

// Telling our Node app to include all these modules
// const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const Users = require("./models/userModel");
// const { application } = require("express");
// const flash = require("express-flash");

dotenv.config();
app.use(express.json()); //accept json data

app.get("/", (req, res) => {
  res.send("Liberary app server started");
});

// app.use("/api/user", userRoutes);
app.use("/api/product",productRoutes)

const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`server runnig on port : ${port}`))
  )
  .catch((err) => console.log(err.message));

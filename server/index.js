const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const mongoose  = require("mongoose");

const app = express();
dotenv.config();
const server = http.createServer(app);
app.use(express.json()); //accept json data




app.get("/", (req, res) => {
  res.send("Chatting app server started");
});

// app.use("/api/user", userRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);
// app.use("/api/notification", notifRouter);
// app.use(notfound);
// app.use(errorhandler);

const port = process.env.PORT || 5000;
mongoose.connect( process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true
}).then(() => app.listen(port, () => console.log(`server runnig on port : ${port}`)))
.catch((err)=> console.log(err.message) )
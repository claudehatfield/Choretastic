const express = require("express");
const path = require("path")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
require("./config/passport")(passport);
var Port = process.env.PORT || 3001;
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))
app.use(passport.initialize());
app.use("/api/users", users);


// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/choretastic", {
      useNewUrlParser: true
    }
  )
  


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});




app.listen(Port, () => console.log(`Server up and running on port ${Port} !`));





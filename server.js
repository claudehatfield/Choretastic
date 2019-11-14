const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
// const db = require("./config/keys").mongoURI;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  
}
app.get('*', function (req, res) {
  const index = path.join(__dirname, 'client/build/index.html');
  res.sendFile(index);
});
// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://claude:militia7@ds033579.mlab.com:33579/heroku_6f9f0kv0",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
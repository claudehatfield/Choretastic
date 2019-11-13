const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const users = require("./routes/api/users");
// const expressLayouts = require('express-ejs-layouts');
const app = express();

// Passport config
require("./config/passport")(passport);



// Passport Config
// require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    "mongodb://claude:militia7@ds141228.mlab.com:41228/heroku_7clpz457",
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
// app.use(
//   session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
//   })
// );
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
// app.use(flash());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
mongoose.connect('mongodb://localhost:27017/choretastic', {useNewUrlParser: true});
 
app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "/client/public", "index.html"));
})

// app.use(function(req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   next();
// });

  // Passport middleware
app.use(passport.initialize());

// Routes
app.use("/api/users", users);
// app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/api/users'));

const Port = process.env.PORT || 3001; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(Port, () => console.log(`Server up and running on port ${Port} !`));


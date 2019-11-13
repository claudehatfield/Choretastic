const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");
const users = require("./routes/api/users");
// const expressLayouts = require('express-ejs-layouts');
const app = express();

// Passport config
// require("./config/passport")(passport);

const PORT = process.env.PORT || 3001; // process.env.port is Heroku's port if you choose to deploy the app there



// Passport Config
// require('./config/passport')(passport);

// DB Config
// const db = require('./config/keys').mongoURI;

// Connect to MongoDB
// mongoose
//   .connect(
    // "mongodb://claude:militia7@ds141228.mlab.com:41228/heroku_7clpz457",
//     process.env.MONGODB_URI || 
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));
// Bodyparser middleware
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );

// app.use(expressLayouts);
// app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
}


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
 
app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "/client/public", "index.html"));
})

// app.use(function(req, res, next) {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   next();
// });

 

// Routes
app.use("/api/users", users);
// app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/api/users'));

// Connect to MongoDB
// mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://claude:militia7@ds033579.mlab.com:33579/heroku_6f9f0kv0', {useNewUrlParser: true});
app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));


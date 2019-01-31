const express = require('express');
const passport = require('passport');
const ejs = require('ejs');
const authroutes = require('./routes/auth-router.js');
const passportSetup = require('./config/passport-setup.js')
const mongoose = require('mongoose');
const keys = require('./config/keys.js');
const cookieSession = require('cookie-session');
const dashroutes = require('./routes/dashroute.js');

const app = express();

//set view
app.set('view engine','ejs');

//initialize passport
app.use(passport.initialize());
app.use(passport.session());


// cookie session
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys:[keys.session.cookieKey]
}));

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,() => {
  console.log('connected to mongodb');});

// routes
app.use('/auth',authroutes);
app.use('/dashboard',dashroutes)

//home
app.get('/',(req,res)=>{
  res.render('home')
});



app.listen(5000, ()=>{
  console.log('connected to port 5000')
});

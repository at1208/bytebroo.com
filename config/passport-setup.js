const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys.js');
const User = require('../models/user-model.js');

passport.serializeUser((user,done)=>{
  done(null,user.id)
});

passport.deserializeUser((id,done)=>{
  User.findById(id).then((user)=>{
      done(null,user.id)
  });
});

passport.use(
  new GoogleStrategy (
  {callbackURL : '/auth/google/redirect',
   clientID: keys.google.clientID,
   clientSecret: keys.google.clientSecret},
  (accessToken, refreshToken, profile,done)=>{
   //check if user already exist in our db
   User.findOne({googleid: profile.id}).then((currentUser) =>{
     if(currentUser){
 console.log('user is: ',currentUser);
 done(null,currentUser);
     }else{
       //if not create user in our db
       new User({
         username: profile.displayName,
         googleid: profile.id
       }).save().then((newUser) => {
         console.log('new user created:',newUser);
         done(null,newUser);
       });
     }
   });

  })
);

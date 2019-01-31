const express = require('express');
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;


const registerSchema = new mongoose.Schema({
  firstName:{
    type:String,

  },
  lastName:{
    type:String,

  },
  emailId:{
    type:String,

  },
  newPassword:{
    type:String,
  },
});

const User = mogoose.model('User',registerSchema);

module.exports = User;

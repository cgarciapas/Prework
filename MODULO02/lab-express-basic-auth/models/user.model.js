const mongoose = require('mongoose');
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const schema = new mongoose.Schema( {
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [EMAIL_REGEX, 'invalid email format'],
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: 8
  }
});

const User = mongoose.model('User', schema);
module.exports = User;
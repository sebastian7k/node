const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fristName: {
    type: String,
    required: true,
  },
  lastName:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    minlength: 7,
  }
  });

  const User = mongoose.model('User', userSchema);

  modele.exports= User;

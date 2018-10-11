const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validate = require('mongoose-validator');

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters',
  })
]

var lengthValidator = [
  validate({
    validator: 'isLength',
    arguments: [6, 20],
    message: 'password should be between {ARGS[0]} and {ARGS[1]} characters',
  })
]

const userSchema = new Schema({
  name:   {
    type: String,
    required: [true,'Name is required'],
    validate: nameValidator
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    valdiate : lengthValidator
  }
}, {
    timestamps : true
});

const User = mongoose.model('User', userSchema);

module.exports = User
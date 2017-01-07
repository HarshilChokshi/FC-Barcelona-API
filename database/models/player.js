const mongoose = require('mongoose');

var Player = mongoose.model('Player', {
  fullName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  popularName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  nationality: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  age: {
    type: Number,
    required: true,
    min: 18
  },

  dateOfBirth: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },

  weight: {
    type: Number,
    required: true,
    min: 40
  },

  height: {
    type: Number,
    required: true,
    min: 100
  },

  shirtNumber: {
    type: Number,
    required: true,
    min: 0
  },

  position: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },

  rating: {
    type: Number,
    required: true,
    min: 50
  }

  description: {
    type: String,
    required: true,
    minlength: 20,
    trim: true
  },

  imageURL: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports.Player = Player;

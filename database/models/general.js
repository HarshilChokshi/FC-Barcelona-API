const mongoose = require('mongoose');

var General = mongoose.model('General', {
  clubName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  clubImageURL : {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  managerName: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  numberOfPlayers: {
    type: Number,
    min: 0,
    required: true
  },

  clubHistory: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports.General = General;

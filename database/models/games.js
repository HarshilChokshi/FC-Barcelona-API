const mongoose = require('mongoose');

var Game = mongoose.model('Game', {
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  competition: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  date: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  opponent: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },

  barcelonaGoals: {
    type: Number,
    required: true,
    min: 0
  },

  oppositionGoals: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports.Game = Game;

const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

const mongoose = require('./../database/mongoose.js').mongoose;
const Player = require('./../database/models/player.js');
const fillPlayers = require('./../database/initialize_database/fill_players.js')

var app = express();
var port = process.env.PORT || 3000;

fillPlayers.addPlayers();

app.listen(port,() => {
  console.log(`Server started up on port: ${port}`);
});

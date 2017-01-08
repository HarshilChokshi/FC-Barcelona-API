const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

const mongoose = require('./../database/mongoose.js').mongoose;
const Player = require('./../database/models/player.js').Player;
const fillPlayers = require('./../database/initialize_database/fill_players.js');

var app = express();
var port = process.env.PORT || 3000;


fillPlayers.addPlayers();

app.use(bodyParser.json());

app.get('/players', (req, res) => {
  Player.find().then((players) => {
    res.send({
      status: 200,
      playersCount: player.length,
      players: players
    });
  }, (err) => {
    res.status(400).send({
      status: 400,
      errorMessage: 'Unable to return data',
      errorDetail: `Error: ${err}`
    });
  } );
});

app.listen(port,() => {
  console.log(`Server started up on port: ${port}`);
});

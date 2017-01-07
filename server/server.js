const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

const mongoose = require('./../database/mongoose.js').mongoose;
const Player = require('./../database/models/player.js');

var app = express();
var port = process.env.PORT || 3000;

app.listen(port,() => {
  console.log(`Server started up on port: ${port}`);
});

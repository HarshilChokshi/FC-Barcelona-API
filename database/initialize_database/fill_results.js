const mongoose = require('./../mongoose.js').mongoose;
const Game = require('./../models/games.js').Game;

module.exports.addResults = () => {
  var gameOne = new Game({
    title: 'FC Barcelona vs. Celtic FC',
    competition: 'uefa-champions-league',
    date: '13/09/2016',
    opponent: 'Celtic FC',
    barcelonaGoals: 7,
    oppositionGoals: 0
  });

  var gameTwo = new Game({
    title: 'Bor. Mönchengladbach vs. FC Barcelona',
    competition: 'uefa-champions-league',
    date: '28/09/2016',
    opponent: 'Bor. Mönchengladbach',
    barcelonaGoals: 2,
    oppositionGoals: 1
  });

  var gameThree = new Game({
    title: 'FC Barcelona vs. Manchester City',
    competition: 'uefa-champions-league',
    date: '19/10/2016',
    opponent: 'Manchester City',
    barcelonaGoals: 4,
    oppositionGoals: 0
  });

  var gameFour = new Game({
    title: 'FC Barcelona vs. Manchester City',
    competition: 'uefa-champions-league',
    date: '01/11/2016',
    opponent: 'Manchester City',
    barcelonaGoals: 1,
    oppositionGoals: 3
  });

  var gameFive = new Game({
    title: 'Celtic FC vs. FC Barcelona',
    competition: 'uefa-champions-league',
    date: '23/11/2016',
    opponent: 'Celtic FC',
    barcelonaGoals: 2,
    oppositionGoals: 0
  });

  var gameSix = new Game({
    title: 'FC Barcelona vs. Bor. Mönchengladbach',
    competition: 'uefa-champions-league',
    date: '06/12/2016',
    opponent: 'Bor. Mönchengladbach',
    barcelonaGoals: 4,
    oppositionGoals: 0
  });

  gameOne.save().then((doc) => {
    console.log('game one saved');
  }).then((doc) => {
    gameTwo.save();
  }).then((doc) => {
    gameThree.save();
  }).then((doc) => {
    gameFour.save();
  }).then((doc) => {
    gameFive.save();
  }).then((doc) => {
    gameSix.save();
}).catch((err) => {
  console.log(err);
  });

}

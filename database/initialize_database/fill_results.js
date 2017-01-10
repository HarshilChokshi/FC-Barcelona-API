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

  var gameSeven = new Game({
    title: 'FC Barcelona vs. Real Betis',
    competition: 'la-liga',
    date: '28/08/2016',
    opponent: 'Real Betis',
    barcelonaGoals: 6,
    oppositionGoals: 2
  });

  var gameEight = new Game({
    title: 'Athletic Bilbao vs. FC Barcelona',
    competition: 'la-liga',
    date: '20/08/2016',
    opponent: 'Athletic Bilbao',
    barcelonaGoals: 1,
    oppositionGoals: 0
  });

  var gameNine = new Game({
    title: 'FC Barcelona vs. CD Alavés',
    competition: 'la-liga',
    date: '10/09/2016',
    opponent: 'CD Alavés',
    barcelonaGoals: 1,
    oppositionGoals: 2
  });

  var gameTen = new Game({
    title: 'CD Leganés vs. FC Barcelona',
    competition: 'la-liga',
    date: '17/09/2016',
    opponent: 'CD Leganés',
    barcelonaGoals: 5,
    oppositionGoals: 1
  });

  var game11 = new Game({
    title: 'FC Barcelona vs. Atlético Madrid',
    competition: 'la-liga',
    date: '21/09/2016',
    opponent: 'Atlético Madrid',
    barcelonaGoals: 1,
    oppositionGoals: 1
  });

  var game12 = new Game({
    title: 'Sporting Gijón vs. FC Barcelona',
    competition: 'la-liga',
    date: '24/09/2016',
    opponent: 'Sporting Gijón',
    barcelonaGoals: 5,
    oppositionGoals: 0
  });

  var game13 = new Game({
    title: 'Celta Vigo vs. FC Barcelona',
    competition: 'la-liga',
    date: '02/10/2016	',
    opponent: 'Celta Vigo',
    barcelonaGoals: 3,
    oppositionGoals: 4
  });

  var game14 = new Game({
    title: 'FC Barcelona vs. Deportivo La Coruña',
    competition: 'la-liga',
    date: '15/10/2016',
    opponent: 'Deportivo La Coruña',
    barcelonaGoals: 4,
    oppositionGoals: 0
  });

  var game15 = new Game({
    title: 'Valencia CF vs. FC Barcelona',
    competition: 'la-liga',
    date: '22/10/2016',
    opponent: 'Valencia CF',
    barcelonaGoals: 3,
    oppositionGoals: 2
  });

  var game16 = new Game({
    title: 'FC Barcelona vs. Granada CF',
    competition: 'la-liga',
    date: '29/10/2016',
    opponent: 'Granada CF',
    barcelonaGoals: 1,
    oppositionGoals: 0
  });

  var game17 = new Game({
    title: 'Sevilla FC vs. FC Barcelona',
    competition: 'la-liga',
    date: '06/11/2016',
    opponent: 'Sevilla FC',
    barcelonaGoals: 2,
    oppositionGoals: 1
  });

  var game18 = new Game({
    title: 'FC Barcelona vs. Malaga CF',
    competition: 'la-liga',
    date: '19/11/2016',
    opponent: 'Malage CF',
    barcelonaGoals: 0,
    oppositionGoals: 0
  });

  var game19 = new Game({
    title: 'Real Sociedad vs. FC Barcelona',
    competition: 'la-liga',
    date: '27/11/2016',
    opponent: 'Real Sociedad',
    barcelonaGoals: 2,
    oppositionGoals: 1
  });

  var game20 = new Game({
    title: 'FC Barcelona vs. Real Madrid',
    competition: 'la-liga',
    date: '03/12/2016',
    opponent: 'Real madrid',
    barcelonaGoals: 1,
    oppositionGoals: 1
  });

  var game21 = new Game({
    title: 'CA Osasuna vs. FC Barcelona',
    competition: 'la-liga',
    date: '10/12/2016',
    opponent: 'CA Osasuna',
    barcelonaGoals: 3,
    oppositionGoals: 0
  });

  var game22 = new Game({
    title: 'FC Barcelona vs. Espanyol Barcelona',
    competition: 'la-liga',
    date: '18/12/2016',
    opponent: 'Espanyol Barcelona',
    barcelonaGoals: 4,
    oppositionGoals: 1
  });

  var game23 = new Game({
    title: 'Villarreal CF vs. FC Barcelona',
    competition: 'la-liga',
    date: '08/01/2017',
    opponent: 'Villarreal CF',
    barcelonaGoals: 1,
    oppositionGoals: 1
  });

//   gameOne.save().then((doc) => {
//     console.log('game one saved');
//   }).then((doc) => {
//     gameTwo.save();
//   }).then((doc) => {
//     gameThree.save();
//   }).then((doc) => {
//     gameFour.save();
//   }).then((doc) => {
//     gameFive.save();
//   }).then((doc) => {
//     gameSix.save();
// }).catch((err) => {
//   console.log(err);
//   });

  gameSeven.save().then((doc) => {
    console.log('game seven saved');
  }).then((doc) => {
    gameEight.save();
  }).then((doc) => {
    gameNine.save();
  }).then((doc) => {
    gameTen.save();
  }).then((doc) => {
    game11.save();
  }).then((doc) => {
    game12.save();
  }).then((doc) => {
    game13.save();
  }).then((doc) => {
    game14.save();
  }).then((doc) => {
    game15.save()
  }).then((doc) => {
    game16.save();
  }).then((doc) => {
    game17.save();
  }).then((doc) => {
    game18.save();
  }).then((doc) => {
    game19.save();
  }).then((doc) => {
    game20.save();
  }).then((doc) => {
    game21.save();
  }).then((doc) => {
    game22.save();
  }).then((doc) => {
    game23.save();
  });

}

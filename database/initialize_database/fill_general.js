var mongoose = require('./../mongoose.js').mongoose;
var General = require('./../models/general.js').General;

module.exports.addGeneral = () => {
  var general = new General({
    clubName: 'FC Barcelona',
    clubImageURL: 'https://www.google.ca/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjWmvj_ucDRAhWBbCYKHSQOBNQQjRwIBw&url=http%3A%2F%2Fwww.kuchalana.com%2F2016%2F07%2Fkit-barcelona-2016-2017-dream-league-soccer.html&psig=AFQjCNF3vvD78pXeSH-samzffO1iGpOK7g&ust=1484442665841787',
    managerName: 'Luis Enrique',
    numberOfPlayers: 22,
    clubHistory: `Founded in 1899 by a group of Swiss, English and Catalan footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto "Més que un club" (More than a club). Unlike many other football clubs, the supporters own and operate Barcelona. It is the second most valuable sports team in the world, worth $3.56 billion, and the world's second richest football club in terms of revenue, with an annual turnover of €560.8 million.The official Barcelona anthem is the "Cant del Barça", written by Jaume Picas and Josep Maria Espinàs.
Domestically, Barcelona has won 24 La Liga, 28 Copa del Rey, 12 Supercopa de España, 3 Copa Eva Duarte and 2 Copa de la Liga trophies, as well as being the record holder for the latter four competitions. In international club football, Barcelona has won five UEFA Champions League titles, a record four UEFA Cup Winners' Cup, a shared record five UEFA Super Cup, a record three Inter-Cities Fairs Cup, a record three FIFA Club World Cup and a shared record two Latin Cup trophies.Barcelona was ranked first in the IFFHS Club World Ranking for 1997, 2009, 2011, 2012 and 2015 and currently occupies the third position on the UEFA club rankings.[8] The club has a long-standing rivalry with Real Madrid; matches between the two teams are referred to as El Clásico.
Barcelona is one of the most supported teams in the world, and has the largest social media following in the world among sports teams. Barcelona's players have won a record number of Ballon d'Or awards (11), as well as a record number of FIFA World Player of the Year awards (7). In 2010, three players who came through the club's youth academy (Messi, Iniesta and Xavi) were chosen as the three best players in the world in the FIFA Ballon d'Or awards, an unprecedented feat for players from the same football school.
Barcelona is one of three founding members of the Primera División that have never been relegated from the top division, along with Athletic Bilbao and Real Madrid. In 2009, Barcelona became the first Spanish club to win the continental treble consisting of La Liga, Copa del Rey, and the UEFA Champions League, and also became the first football club to win six out of six competitions in a single year, completing the sextuple in also winning the Spanish Super Cup, UEFA Super Cup and FIFA Club World Cup. In 2011, the club became European champions again and won five trophies. This Barcelona team, which reached a record six consecutive Champions League semi-finals and won 14 trophies in just four years under Pep Guardiola, is considered by some in the sport to be the greatest team of all time.[13][14][15] By winning their fifth Champions League trophy on 6 June 2015, Barcelona became the first European club in history to achieve the continental treble twice.`
  });

  general.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });
}

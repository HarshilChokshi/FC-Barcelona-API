const Player = require('./../models/player.js').Player;
const mongoose = require('./../mongoose.js').mongoose;

module.exports.addPlayers = () => {
  var messi = new Player({
    fullName: 'Lionel Andrés Messi',
    popularName: 'messi',
    nationality: 'Argentina',
    age: 29,
    dateOfBirth: '24/06/1987',
    weight: 72,
    height: 170,
    shirtNumber: 10,
    position: 'Right Wing',
    rating: 95,
    description: `Lionel Messi is the heir apparent to the throne left vacant by Diego Armando Maradona. The waters are divided between those who consider him to be far from being the best No. 10, and those who believe that Messi will be even better than Maradona.
Born in Rosario, he cut his teeth in the youth ranks of Newell's Old Boys, until a hormonal problem that affected his growth changed the plans of his family and, of course, his personal future. Facing expensive treatment for their son, Messi's parents moved to Spain as Newell's were not able to afford the medical costs related to his condition, and even the wealthiest Argentine teams, such as River Plate, refused to foot the bill.
After his first trial with Barcelona, the Catalan coaches had no doubts. They decided to sign Messi and pay for his medical treatment. His growth was noticeable within Barca, and in little time he came to be considered one of the great talents at the club. He made his debut in the first division in October 2004, against Espanyol, and Barcelona have since adopted him as one of their greatest idols.
His first championship would come in the Liga season of 2004-05. Since then, and playing a more prominent role every season, he has won every major club trophy at Camp Nou -- including a stunning haul of six in 2008-09 -- and claimed the World Player of the Year [later the FIFA Ballon d'Or] award four times in four years.
Messi has proven his credentials on the biggest stage with goals in two of the three Champions League finals he has won with Barcelona, with his achievements leaving many in little doubt that he is the best player of his generation; possibly of all time.
That idea was given further weight in March 2012 when, at the age of 24, he became the all-time top scorer at Barcelona -- beating the 232 goals of Cesar Rodriguez.
The forward's hat-trick in Barcelona's 4-3 win over Real Madrid in March 2014 also saw him become the all-time top scorer in El Clasico clashes.
Messi endured criticism over his performances during the 2013-14 campaign despite scoring 28 goals in 31 Liga appearances as Barcelona lost the title to Atletico Madrid in a dramatic final day clash, but the forward committed his long-term future to the club with a new deal in May 2014 and came back with a bang to claim the Treble of La Liga, Champions League and Copa del Rey after scoring 43 goals in 38 games.
As the top scorer for Barcelona, and still under the age of 30, Messi is simply one of the best there has ever been.`,
    imageURL: 'http://s.weltsport.net/bilder/spieler/gross/26622.jpg'
  });

  var neymar = new Player({
    fullName: 'Neymar da Silva Santos Júnior',
    popularName: 'neymar',
    nationality: 'Brazil',
    age: 25,
    dateOfBirth: '05/02/1992',
    weight: 68,
    height: 175,
    shirtNumber: 11,
    position: 'Left Wing',
    rating: 92,
    description: `Every so often a young Brazilian forward of such dazzling potential emerges that comparisons are immediately made with the greatest of all, Pele.
As another graduate of the Santos academy, and a player who has made a stunning impact in his teens, it is inevitable that Neymar has become one of them. However, he has said that his style is closer to that of Garrincha, and that Romario is his hero in the Selecao shirt. The early indications are that this hugely talented forward might just have the potential to join the ranks of Brazil greats.
Though still in his formative years, Neymar has already dazzled in Brazilian domestic football and at youth level for his country, and now he is beginning to do the same for the senior side.
Since being overlooked for the 2010 World Cup by Dunga, despite pleas from Pele himself, Neymar has become the central figure for Brazil, amassing a total of 65 caps for the senior side.
A Santos player since 2003, he made his debut aged 17 and quickly shot to fame when winning the Campeonato Paulista in 2010 and being named the best player in the competition. Maintaining an impressive strike-rate, he shone alongside his stylistic soul-mate Robinho upon his loan return to the club from Manchester City, and was the subject of a 23-million-pound offer from Chelsea in August 2010, which he rejected to continue his career in Brazil.
It proved to be a wise choice as Neymar was on the scoresheet when Santos defeated Penarol in June 2011 to claim their first Copa Libertadores title since 1963. The fleet-footed forward was awarded the FIFA Puskas award for his sensational solo goal against Flamengo and followed in the footsteps of Diego Maradona, Zico and Pele by winning the 2011 South American Footballer of the Year.
With 100 goals already to his name by his 20th birthday, Neymar's next task was to transfer his club form to the international side though he failed to make an impact at the 2011 Copa America, where Brazil were defeated by Paraguay in the quarterfinals. However, he did score three goals in the London 2012 Olympics as Brazil lost out on the gold medal to Mexico in the final.
Yet, Neymar's coming of age finally arrived at the 2013 Confederations Cup when he opened the scoring with a tremendous half volley in the third minute of the opening match against Japan. This was to be Neymar's tournament as he scored four goals, including one in the 3-0 final victory over Spain.
A big money move to Barcelona transpired that summer for Brazil's golden boy and he opened his account for the club in the first leg of Barcelona's Spanish Supercopa victory over Atletico Madrid. A further 14 goals followed as Barcelona missed out on the La Liga title on the final day -- though Neymar was largely absent for their run-in as a result of injury.
All eyes were on Neymar at the start of the 2014 World Cup, and he did not disappoint in scoring four goals for Brazil. However, his tournament was cut short when he suffered a fractured vertebra in his back during Brazil's 2-0 quarterfinal victory over Colombia. With Neymar injured, Brazil suffered their worst ever World Cup defeat, a 7-1 dismantling against Germany in the semifinals.
A stronger and more determined Neymar returned from that back injury and helped lead Barcelona to a second Treble, including 22 goals during the 2014-15 La Liga campaign and the final strike for Barcelona in their 3-1 Champions League final triumph over Juventus.
Once again, all hopes for another international trophy for Brazil fell on Neymar's shoulders at the 2015 Copa America in Chile, yet Neymar failed to complete the event after being suspended for four matches due to comments made to the referee following Brazil's 1-0 group stage defeat to Colombia.`,
    imageURL: 'http://s.weltsport.net/bilder/spieler/gross/142105.jpg'
  });

  messi.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  neymar.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });
}

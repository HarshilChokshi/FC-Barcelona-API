const Player = require('./../models/player.js').Player;
const mongoose = require('./../mongoose.js').mongoose;

module.exports.addPlayers = () => {
//   var messi = new Player({
//     fullName: 'Lionel Andrés Messi',
//     popularName: 'messi',
//     nationality: 'Argentina',
//     age: 29,
//     dateOfBirth: '24/06/1987',
//     weight: 72,
//     height: 170,
//     shirtNumber: 10,
//     position: 'Right Wing',
//     rating: 95,
//     description: `Lionel Messi is the heir apparent to the throne left vacant by Diego Armando Maradona. The waters are divided between those who consider him to be far from being the best No. 10, and those who believe that Messi will be even better than Maradona.
// Born in Rosario, he cut his teeth in the youth ranks of Newell's Old Boys, until a hormonal problem that affected his growth changed the plans of his family and, of course, his personal future. Facing expensive treatment for their son, Messi's parents moved to Spain as Newell's were not able to afford the medical costs related to his condition, and even the wealthiest Argentine teams, such as River Plate, refused to foot the bill.
// After his first trial with Barcelona, the Catalan coaches had no doubts. They decided to sign Messi and pay for his medical treatment. His growth was noticeable within Barca, and in little time he came to be considered one of the great talents at the club. He made his debut in the first division in October 2004, against Espanyol, and Barcelona have since adopted him as one of their greatest idols.
// His first championship would come in the Liga season of 2004-05. Since then, and playing a more prominent role every season, he has won every major club trophy at Camp Nou -- including a stunning haul of six in 2008-09 -- and claimed the World Player of the Year [later the FIFA Ballon d'Or] award four times in four years.
// Messi has proven his credentials on the biggest stage with goals in two of the three Champions League finals he has won with Barcelona, with his achievements leaving many in little doubt that he is the best player of his generation; possibly of all time.
// That idea was given further weight in March 2012 when, at the age of 24, he became the all-time top scorer at Barcelona -- beating the 232 goals of Cesar Rodriguez.
// The forward's hat-trick in Barcelona's 4-3 win over Real Madrid in March 2014 also saw him become the all-time top scorer in El Clasico clashes.
// Messi endured criticism over his performances during the 2013-14 campaign despite scoring 28 goals in 31 Liga appearances as Barcelona lost the title to Atletico Madrid in a dramatic final day clash, but the forward committed his long-term future to the club with a new deal in May 2014 and came back with a bang to claim the Treble of La Liga, Champions League and Copa del Rey after scoring 43 goals in 38 games.
// As the top scorer for Barcelona, and still under the age of 30, Messi is simply one of the best there has ever been.`,
//     imageURL: 'http://s.weltsport.net/bilder/spieler/gross/26622.jpg'
//   });
//
//   var neymar = new Player({
//     fullName: 'Neymar da Silva Santos Júnior',
//     popularName: 'neymar',
//     nationality: 'Brazil',
//     age: 25,
//     dateOfBirth: '05/02/1992',
//     weight: 68,
//     height: 175,
//     shirtNumber: 11,
//     position: 'Left Wing',
//     rating: 92,
//     description: `Every so often a young Brazilian forward of such dazzling potential emerges that comparisons are immediately made with the greatest of all, Pele.
// As another graduate of the Santos academy, and a player who has made a stunning impact in his teens, it is inevitable that Neymar has become one of them. However, he has said that his style is closer to that of Garrincha, and that Romario is his hero in the Selecao shirt. The early indications are that this hugely talented forward might just have the potential to join the ranks of Brazil greats.
// Though still in his formative years, Neymar has already dazzled in Brazilian domestic football and at youth level for his country, and now he is beginning to do the same for the senior side.
// Since being overlooked for the 2010 World Cup by Dunga, despite pleas from Pele himself, Neymar has become the central figure for Brazil, amassing a total of 65 caps for the senior side.
// A Santos player since 2003, he made his debut aged 17 and quickly shot to fame when winning the Campeonato Paulista in 2010 and being named the best player in the competition. Maintaining an impressive strike-rate, he shone alongside his stylistic soul-mate Robinho upon his loan return to the club from Manchester City, and was the subject of a 23-million-pound offer from Chelsea in August 2010, which he rejected to continue his career in Brazil.
// It proved to be a wise choice as Neymar was on the scoresheet when Santos defeated Penarol in June 2011 to claim their first Copa Libertadores title since 1963. The fleet-footed forward was awarded the FIFA Puskas award for his sensational solo goal against Flamengo and followed in the footsteps of Diego Maradona, Zico and Pele by winning the 2011 South American Footballer of the Year.
// With 100 goals already to his name by his 20th birthday, Neymar's next task was to transfer his club form to the international side though he failed to make an impact at the 2011 Copa America, where Brazil were defeated by Paraguay in the quarterfinals. However, he did score three goals in the London 2012 Olympics as Brazil lost out on the gold medal to Mexico in the final.
// Yet, Neymar's coming of age finally arrived at the 2013 Confederations Cup when he opened the scoring with a tremendous half volley in the third minute of the opening match against Japan. This was to be Neymar's tournament as he scored four goals, including one in the 3-0 final victory over Spain.
// A big money move to Barcelona transpired that summer for Brazil's golden boy and he opened his account for the club in the first leg of Barcelona's Spanish Supercopa victory over Atletico Madrid. A further 14 goals followed as Barcelona missed out on the La Liga title on the final day -- though Neymar was largely absent for their run-in as a result of injury.
// All eyes were on Neymar at the start of the 2014 World Cup, and he did not disappoint in scoring four goals for Brazil. However, his tournament was cut short when he suffered a fractured vertebra in his back during Brazil's 2-0 quarterfinal victory over Colombia. With Neymar injured, Brazil suffered their worst ever World Cup defeat, a 7-1 dismantling against Germany in the semifinals.
// A stronger and more determined Neymar returned from that back injury and helped lead Barcelona to a second Treble, including 22 goals during the 2014-15 La Liga campaign and the final strike for Barcelona in their 3-1 Champions League final triumph over Juventus.
// Once again, all hopes for another international trophy for Brazil fell on Neymar's shoulders at the 2015 Copa America in Chile, yet Neymar failed to complete the event after being suspended for four matches due to comments made to the referee following Brazil's 1-0 group stage defeat to Colombia.`,
//     imageURL: 'http://s.weltsport.net/bilder/spieler/gross/142105.jpg'
//   });

  var suarez = new Player({
    fullName: 'Luis Suárez',
    popularName: 'suarez',
    nationality: 'Uruguay',
    age: 30,
    dateOfBirth: '24/01/1987',
    weight: 86,
    height: 182,
    shirtNumber: 9,
    position: 'Striker',
    rating: 91,
    description: `One of football's most divisive figures, Luis Suarez is a supremely gifted player who is tainted by an inability to stay out of trouble. His talent has never been in question but controversy never seems to be far from him, making it all the more surprising that Barcelona gambled £75 million on taking him to Catalonia from Liverpool in the summer of 2014.
The year of 2014 perfectly encapsulated Suarez, from the sublime to the ridiculous. He finished the 2013-14 season as the Premier League's top scorer, his irrepressible presence in the Liverpool forward line taking the club to within a whisker of winning a first league title in 24 years. Then came the World Cup, a bite on Italy's Giorgio Chiellini seen around the globe and a subsequent four-month ban from football. The flawed genius had struck again.
Parallels could certainly be drawn with 2010, the year that first launched Suarez into world superstardom, as well as global infamy. After finishing the 2009-10 season with a remarkable tally of 49 goals in 48 games in all competitions for Ajax, winning the Dutch Cup in the process, Suarez travelled to South Africa to contest the World Cup with Uruguay. In the quarterfinals against Ghana, he blocked a goal-bound effort in the final minute of extra time, earning a red card and conceding a penalty. However, Asamoah Gyan missed from 12 yards and Uruguay prevailed in the subsequent shootout, leading Suarez to be castigated by many for his role in the elimination of Africa's final competitors.
His magnetic attraction to negative PR was displayed once again in November 2010 when he was banned for seven games for biting PSV Eindhoven midfielder Otman Bakkal. The incident marked the final match of a wildly successful career in the Eredivisie following his move from Nacional in 2006, when he left the Uruguayan club having won the league in his debut season in the first team.
It was Groningen who brought him to the Netherlands for around 800,000 euros and, after scoring 10 goals in 29 games in his first season in the country, Ajax paid €7.5 million to take him to Amsterdam. Prior to the start of the 2010-11 season, he had repaid them handsomely with 74 goals in 97 league appearances, leading to speculation of a move to one of Europe's bigger clubs, and specifically Liverpool -- a club he eventually agreed to join for £22.8 million in the 2011 January transfer window.
Suarez made an immediate impact at Liverpool, scoring on his Premier League debut against Stoke and endearing himself to the Anfield faithful thanks to his energy on the pitch. Hopes were high for his first full season after he was named the 2011 Copa America's Best Player as Uruguay won the tournament but, despite netting a respectable 17 goals in all competitions, his scoring form was marked by a propensity to hit the post rather than the back of the net in 2011-12. A superb hat trick against Norwich was perhaps his most positive contribution, while his most negative was unquestionably the eight-match ban he received for using racist language towards Manchester United's Patrice Evra. The suspension served to increase speculation about the striker's future, but he signed a new contract with the Reds in August 2012 shortly after appearing for Uruguay at the London Olympics.
The 2012-13 season saw Suarez significantly step up his game as he scored 23 goals in 33 games -- including another treble against Norwich -- as new Reds boss Brendan Rodgers brought the best out of him on the pitch. A particularly promising partnership was struck up with Daniel Sturridge following his arrival in January 2013, but Suarez would produce another blot on his copybook before the season was through. During a match against Chelsea in April, Suarez -- for the second time in his career -- sunk his teeth into an opponent. This time, Branislav Ivanovic was the victim and Suarez was banned for eight matches.
A summer of speculation followed, with Suarez suggesting he was ready to leave Anfield and Arsenal testing Liverpool's resolve, before the Uruguayan agreed to stay. It was to the benefit of both player and club. Banned for the first five games of the season, Suarez played in every remaining Premier League match after his return, scoring 31 goals in 33 goals as Liverpool -- unfancied before the start of the season -- came agonisingly close to winning the title. Of course, there was a third hat trick in three seasons against Norwich.
He went into the World Cup nursing a knee injury but was still expected to be one of the stars of the tournament. After a Suarez-less Uruguay lost to Costa Rica in their opening game, the talisman returned to face -- of all teams -- England. A match-winning brace against the Three Lions demonstrated again just how devastating a footballer he could be and all the talk was of a man who had achieved redemption.
That talk soon stopped.
In the final group game against Italy, Suarez became tangled with Chiellini. The teeth marks on the Azzurri defender's shoulder, along with the numerous television replays, showed that -- remarkably -- Suarez had bitten an opponent for the third time in his career. Despite overwhelming evidence to the contrary, Suarez and Uruguay -- players, fans, even the president -- denied that a bite had taken place. Eventually, Suarez admitted his crime but not before FIFA threw the book at him, banning him from all football-related activity to four months.
Liverpool had already backed Suarez through two high-profile controversies, but the Chiellini incident was one misdemeanour too many and the Reds opted to cash-in on their star player. Barcelona came calling and Suarez moved to the city in which his in-laws reside, beginning his search for redemption all over again.
After serving his club suspension, Suarez made his La Liga debut for Barcelona in the Clasico versus Real Madrid on Oct. 25, a match that ended 3-1 to Real. After a hesitant start at the Camp Nou, Suarez took flight and helped the Catalonians win their second Treble by tallying 16 goals in La Liga and scoring the winner in the Champions League final against Juventus.`,
    imageURL: 'http://s.weltsport.net/bilder/spieler/gross/43635.jpg'
  });

  var iniesta = new Player({
    fullName: 'Andrés Iniesta Lugan',
    popularName: 'iniesta',
    nationality: 'Spain',
    age: 32,
    dateOfBirth: '11/05/1984',
    weight: 68,
    height: 171,
    shirtNumber: 6,
    position: 'Left Center Midfield',
    rating: 89,
    description: `Andrés Iniesta Luján is a Spanish professional footballer who plays as a central midfielder for FC Barcelona and the Spain national team. He serves as the captain for Barcelona.
Iniesta came through La Masia, the Barcelona youth academy, after an early emigration from his birthplace, and impressed from an early age. He made his first-team debut aged 18 in 2002. He began playing regularly during the 2004–05 season and has remained in the team ever since. Iniesta was an integral part of the Barcelona sides that won two historic trebles in 2009 and 2015, and his 32 trophies make him the most decorated Spanish footballer of all time.[3]
Iniesta played for Spain at the Under-16, Under-19 and Under-21 levels before making his international debut in 2006. He helped Spain win Euro 2008, playing every game and being selected in the Team of the Tournament. Iniesta was also a key member of the victorious Spanish team at the 2010 World Cup; he scored the winning goal in the final against the Netherlands, for which he was named the Man of the Match, and was selected to the tournament's All-Star Team. At Euro 2012, Iniesta steered Spain to their second consecutive continental crown, again being chosen as the Man of the Match of the final against Italy, and was named the Player of the Tournament.
Iniesta is considered to be one of the best players of his generation and one of the greatest midfielders of all time.[4][5][6][7] Since 2009, he has been chosen in the UEFA Team of the Year five times and has been voted into the FIFA World XI on seven occasions. Iniesta won the UEFA Best Player in Europe award in 2012 and was named the IFFHS World's Best Playmaker in 2012 and 2013. He was runner-up to Lionel Messi for the 2010 FIFA Ballon d'Or and achieved third place in 2012.`,
    imageURL: 'http://s.weltsport.net/bilder/spieler/gross/5057.jpg'
  });

  var busquets = new Player({
    fullName: 'Sergio Busquets Burgos',
    popularName: 'busquets',
    nationality: 'Spain',
    age: 28,
    dateOfBirth: '16/07/1988',
    weight: 76,
    height: 189,
    shirtNumber: 5,
    position: 'Central Defensive Midfield',
    rating: 88,
    description: `Sergio Busquets Burgos is a Spanish professional footballer who plays as a defensive midfielder for FC Barcelona and the Spain national team.
He was a relatively obscure player when he arrived in Barcelona's first team in July 2008, but eventually made a name for himself as one of the best central midfielders in a relatively short period of time, reaching the Spanish national team less than one year after making his professional club debut.
Busquets helped Spain win the 2010 World Cup and the Euro 2012 tournaments. He also represented the nation at the 2014 World Cup and Euro 2016, earning 90 caps in total.`,
    imageURL: 'http://s.weltsport.net/bilder/spieler/gross/124973.jpg'
  });

  var rakitic = new Player({
    fullName: 'Ivan Rakitic',
    popularName: 'rakitic',
    nationality: 'Croatia',
    age: 28,
    dateOfBirth: '10/03/1988',
    weight: 78,
    height: 184,
    shirtNumber: 4,
    position: 'Right Center Midfield',
    rating: 87,
    description: `Ivan Rakitić is a Croatian professional footballer who plays as a central or attacking midfielder for Spanish club FC Barcelona and the Croatia national team.
Rakitić started his professional career at Basel and spent two seasons with them before he was signed by Schalke 04. After spending three-and-a-half seasons in the Bundesliga, he was signed by Sevilla in January 2011. Two years later, Rakitić was confirmed as the club captain and captained the team to UEFA Europa League triumph. In June 2014, Barcelona and Sevilla reached an agreement on the transfer of Rakitić. In his first season with Barça, he won the treble of La Liga, Copa del Rey and UEFA Champions League. He scored the first goal of the 2015 Champions League Final and became the first player ever to win the Champions League one year after winning the Europa League while playing for two different clubs.
At the international level, Rakitić plays for the Croatian national team. Although naturally a product of Switzerland's youth level, Rakitić pledged his international career to his parents' country of Croatia instead. He made his debut for Croatia in 2007 and has since represented the country at UEFA Euro 2008, UEFA Euro 2012, the 2014 FIFA World Cup and UEFA Euro 2016, earning over 80 caps.`,
    imageURL: 'http://s.weltsport.net/bilder/spieler/gross/35308.jpg'
  });

  var pique = new Player({
    fullName: 'Gerard Piqué Bernabéu',
    popularName: 'pique',
    nationality: 'Spain',
    age: 28,
    dateOfBirth: '02/02/1987',
    weight: 85,
    height: 194,
    shirtNumber: 3,
    position: 'Center Back',
    rating: 87,
    description: `Gerard Piqué Bernabéu is a Spanish professional footballer who plays as a centre-back for FC Barcelona and the Spain national team.
A product of Barça's cantera, La Masia, Piqué initially left the club for Manchester United in 2004, where he remained for four years, before returning to Barça under Pep Guardiola's leadership, helping the club win trebles in 2008–09 and 2014–15. He is one of four players to have won the UEFA Champions League two years in a row with different teams, the others being Marcel Desailly, Paulo Sousa and Samuel Eto'o.[3]
Piqué has also represented Spain, making his debut on 11 February 2009. He played an integral role in the Spain team that won the 2010 FIFA World Cup and UEFA Euro 2012.`,
    imageURL: 'http://s.weltsport.net/bilder/spieler/gross/27798.jpg'
  });

  var alba = new Player({
    fullName: 'Jordi Alba Ramos',
    popularName: 'alba',
    nationality: 'Spain',
    age: 27,
    dateOfBirth: '21/03/1989',
    weight: 68,
    height: 170,
    shirtNumber: 18,
    position: 'Left Back',
    rating: 86,
    description: `Jordi Alba Ramos is a Spanish professional footballer who plays for FC Barcelona and the Spain national team. Mainly a left-back and a player of great speed, he can also operate as a left winger.[2]
He started his career at Hospitalet, but finished his development at Valencia (after a seven-year youth spell with Barcelona), rising to prominence in La Liga with the club. In 2012, he returned to Barcelona.
Alba represented Spain at the 2014 World Cup and two European Championships, having first appeared for the team in 2011. He won the latter tournament.`,
    imageURL: 'http://s.weltsport.net/bilder/spieler/gross/125417.jpg'
  });

  var mascherano = new Player({
    fullName: 'Javier Alejandro Mascherano',
    popularName: 'mascherano',
    nationality: 'Argentina',
    age: 32,
    dateOfBirth: '08/06/1984',
    weight: 73,
    height: 174,
    shirtNumber: 14,
    position: 'Center Back',
    rating: 86,
    description: `Javier Alejandro Mascherano is an Argentine professional footballer who plays as a defensive midfielder or centre-back for Spanish club FC Barcelona and the Argentina national team.
Nicknamed El Jefecito (the little chief),[2][3] Mascherano is a versatile and tactically intelligent footballer, with an excellent ability to read the game and organise his team; he is known in particular for his leadership skills, passing accuracy, tough marking of opponents, and hard-tackling style of play.[4][5][6][7][8]
Mascherano began his career at River Plate, where he earned his first senior honours, the Primera División Argentina, in 2003–04. He moved to Brazilian side Corinthians in 2005, winning the Brazilian Série A in his first season. Mascherano then moved to Europe, signing for Premier League side West Ham United, but his brief time at the club was blighted by unusual contract terms with Global Soccer Agencies. At the beginning of 2007, he joined Liverpool on loan, reaching the final of the UEFA Champions League, before he signed with the club for £18.7 million. After three years playing for Liverpool, Mascherano joined Barcelona in 2010, where he changed his position of defensive midfielder to full central defender. With Barcelona he has won four La Liga championships, two UEFA Champions League titles, and two FIFA Club World Cups, among other honours.
Mascherano has made over 100 appearances for the Argentina national football team, making him the second-most capped player in the country's history, after Javier Zanetti. Since his debut in 2003, he has represented the nation at five Copa América tournaments, finishing runner-up in 2004, 2007, 2015, and 2016, and three FIFA World Cups, reaching the 2014 final. He twice won a gold medal at the Summer Olympics, in 2004 and 2008, becoming the first male footballer to achieve this double feat since 1968. Between 2008 and 2011, Mascherano served as the captain of Argentina.`,
    imageURL: 'http://s.weltsport.net/bilder/spieler/gross/22185.jpg'
  });

  var stegan = new Player({
    fullName: 'Marc-André ter Stegen',
    popularName: 'stegan',
    nationality: 'Germany',
    age: 24,
    dateOfBirth: '30/04/1992',
    weight: 85,
    height: 187,
    shirtNumber: 1,
    position: 'Goalkeeper',
    rating: 84,
    description: `Marc-André ter Stegen is a German professional footballer who plays as a goalkeeper for Spanish club Barcelona.[2][3][4]
After four seasons in the Bundesliga with Borussia Mönchengladbach, making 108 league appearances, he joined Barcelona for €12 million in 2014. He won the treble in his first season in Spain, playing in Barcelona's wins in the Copa del Rey and UEFA Champions League.
Ter Stegen has represented Germany at several youth levels and made his senior international debut in 2012.`,
    imageURL: 'http://s.weltsport.net/bilder/spieler/gross/150720.jpg'
  });
  // messi.save().then((doc) => {
  //   console.log(JSON.stringify(doc, undefined, 2));
  // }, (err) => {
  //   console.log(err);
  // });
  //
  // neymar.save().then((doc) => {
  //   console.log(JSON.stringify(doc, undefined, 2));
  // }, (err) => {
  //   console.log(err);
  // });

  suarez.save().then((doc) => {
     console.log(JSON.stringify(doc, undefined, 2));
   }, (err) => {
     console.log(err);
   });

  iniesta.save().then((doc) => {
      console.log(JSON.stringify(doc, undefined, 2));
    }, (err) => {
      console.log(err);
    });

  busquets.save().then((doc) => {
       console.log(JSON.stringify(doc, undefined, 2));
     }, (err) => {
       console.log(err);
     });

   rakitic.save().then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2));
      }, (err) => {
        console.log(err);
      });

    pique.save().then((doc) => {
         console.log(JSON.stringify(doc, undefined, 2));
       }, (err) => {
         console.log(err);
       });

    alba.save().then((doc) => {
          console.log(JSON.stringify(doc, undefined, 2));
        }, (err) => {
          console.log(err);
        });

    mascherano.save().then((doc) => {
           console.log(JSON.stringify(doc, undefined, 2));
         }, (err) => {
           console.log(err);
         });

    stegan.save().then((doc) => {
            console.log(JSON.stringify(doc, undefined, 2));
          }, (err) => {
            console.log(err);
          });
}

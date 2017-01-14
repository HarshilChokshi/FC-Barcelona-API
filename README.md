# FC-Barcelona-Api
A RESTful API that returns rich data about FC Barcelona soccer team such as game results, fixtures, player details, and more information (Information in returned in JSON format).


#*Usage*
###base_url:
`https://pure-bayou-11893.herokuapp.com`

##Player information
FC Barcelona API returns detailed information about all barcelona football players. Information such as player name, height, weight, age, shirt number, position, rating, image, and description is returned. You can get information about all players or about a specific player.

###Get all players
In order to get information about all players make a call too:

`base_url/players`

###Get player by name
In order to get information about a certain player make a call too:

`base_url/players/playerShortName      //playerShortName in lowercase characters`

List of player short names:

* messi
* neymar
* suarez
* iniesta
* busquets
* rakitic
* pique
* alba
* mascherano
* rafinha
* roberto
* stegan
* umtiti
* gomes
* denis
* digne
* turan
* cillessen
* mathieu
* alcacer
* masip
* vidal


##Results Information
You can also get detailed information about all FC Barcelona results, or results by competition name. Information such as game title, opposition, score-line, game date, and competition type is returned.

###Get all results
In order to get all of FC Barcelona results this season, no matter what the competition, make a call to:

`base_url/results`


###Get results by competition type
In order to get all of FC Barcelona results this season, by competition type, make a call to:

`base_url/results/competitionName //competitionName in all lowercase characters`

List of competition types:


* la-liga
* uefa-champions-league
* copa-del-rey


##General Information
FC Barcelona API also returns general infromation about the football club such as club name, manager, image, history, number of players etc.

###Get general information about FC Barcelona
In order to get general information about the football club make a call to:

`base_url/general`


##Author
Harshil Chokshi

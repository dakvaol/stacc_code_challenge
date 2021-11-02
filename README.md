# Stacc code challenge 2021

## Oppgavebeskrivelse
Jeg valgte å gjøre oppgave B og lagde da en API som kan hente ut PEP, og organisasjoner. Den kan hente ut en spesifikk PEP etter navn, samt alle organiasjoner eller en spesifikk organisasjon basert på organisasjonsnummer. Se Postman lenken lenger nede for mer info om hvordan bruke spørringene. Selve APIen er kodet i Express JS og all dataen er lagret i MongoDB Atlas. 

## Hvordan kjøre prosjektet
APIen er tilgjengelig på linken lenger nede. Det er mulig å kjøre lokalt med **npm install && npm start**, men fordi all dataen ligger i MongoDB Atlas vil det trengs en login på databasen som ikke er tilgjengelig via Github repoen. 

## Kommentarer
Error handling vil aldri trigges pga. jeg bruker async funksjoner. Hadde jeg hatt litt mer tid ville jeg laget en egen error handler som fikset dette problemet. 
Det er også kodet en funksjon for å hente ut alle PEP, men den crasher appen på Heroku. Trolig pga. jeg brukte pep.csv istedenfor pep_small.csv. 

# Lenker
* Link til api: https://stacccodechallengedavid.herokuapp.com 
* Link til dokumentasjon: https://documenter.getpostman.com/view/18151798/UVByLApN 

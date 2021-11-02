# Stacc code challenge 2021

## Oppgavebeskrivelse
Jeg valgte å gjøre oppgave B og lagde da en API som kan hente ut PEP, og organisasjoner. Den kan hente ut en spesifikk PEP etter navn, samt alle organiasjoner eller en spesifikk organisasjon basert på organisasjonsnummer. Se Postman lenken lenger nede for mer info om hvordan bruke spørringene. Selve APIen er kodet i Express JS og all dataen er lagret i MongoDB Atlas. 

## Hvordan kjøre prosjektet
APIen er tilgjengelig på lenken lenger nede. Det er mulig å kjøre lokalt med **npm install && npm start**. I .env filen har jeg lagt til en read-only bruker til databasen som kan bruke GET funksjonene. 

## Kommentarer
Error handling vil aldri trigges pga. jeg bruker async funksjoner. Hadde jeg hatt litt mer tid ville jeg laget en egen error handler som fikset dette problemet. 

Det er også kodet en funksjon for å hente ut alle PEP, men den crasher appen på Heroku. Trolig pga. stor mengde data. Spørringen ligger ikke i dokumentasjonen for å unngå nedetid, men om dere vil kjøre den lokalt så kan den testes med " curl --location --request GET 'http://localhost:80/people/' --data-raw ' "  . 


# Lenker
* Link til api: https://stacccodechallengedavid.herokuapp.com 
* Link til dokumentasjon: https://documenter.getpostman.com/view/18151798/UVByLApN 

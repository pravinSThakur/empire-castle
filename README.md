# empire-castle
## This is a repository for microservice - empire castle which as of now provide an API to build the army of randomly distributed troops.  

How to use this service ?

```
git clone https://github.com/pravinSThakur/empire-castle.git
cd empire-castle
npm install
npm test # to run unit tests
npm start
```

Above coomand with start the http service on port 8000.

This service support following POST API -

```
createArmy

Payload to this API is JSON in following format:

{
	"size": 167
}

In response for example you will get JSON like:

{
    "Spearmen": 58,
    "Swordsmen": 86,
    "Archers": 23
}
```

```
After starting the application run POST API createArmy as following:

http://localhost:8000/api/v1/createArmy

With JSON in above format run the API
```
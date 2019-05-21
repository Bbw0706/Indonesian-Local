# Indonesian Local Town

### Tech

This project uses a number of open source projects to work properly:

* React JS - Front-end Library
* Node JS - Runtime Environment
* Express - For backend Framework
* Typescript - Enhancing Javascript Development
* PostgreSQL - SQL Databases
* Redis - For caching and better load
* Google Map API - For showing the Location from lat and long we serve
* Indonesia Town Data


## Installation

### Database
Create the DB in your postgres and import the CSV file and setup the DB config ( the table name is town ) in .env in your backend file

### Server
Install the dependencies and devDependencies and start the server.

```sh
$ cd town-api
$ npm install
$ npm run dev or yarn dev
```

### Google Maps API
Get your key first here, to include in your React .env files 
[Google Cloud Keys](https://cloud.google.com/maps-platform/?__utma=102347093.703821212.1557162212.1558451125.1558451125.1&__utmb=102347093.0.10.1558451125&__utmc=102347093&__utmx=-&__utmz=102347093.1558451125.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)&__utmv=-&__utmk=123995274&_ga=2.11735092.167377043.1558451106-703821212.1557162212#get-started)

### Client
Get the google maps API and include it in .env files
```sh
$ cd ts-react
$ npm install or yarn
$ npm start or yarn start
```
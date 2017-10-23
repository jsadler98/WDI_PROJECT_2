const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbUri } = require('../config/environment');

mongoose.connect(dbUri, { useMongoClient: true });

// Require the model
const Game = require('../models/game');
// Drop the model
Game.collection.drop();
// Create the models
Game
  .create([{
    game: 'Call of Duty WWII',
    console: 'Playstation4',
    prizeMoney: 2000,
    gamingWebsite: 'Game Battles',
    playersNeeded: 2,
    tournament: 'MLG Variant',
    image:'https://images-na.ssl-images-amazon.com/images/I/91wZRDbK4kL._SX342_.jpg',
    gamerTag: 'Scrufta'
  },{
    game: 'Call of Duty Remastered',
    console: 'Playstation4',
    prizeMoney: 200000,
    gamingWebsite: 'Game Battles',
    playersNeeded: 1,
    tournament: 'MLG BO3',
    image:'https://images-na.ssl-images-amazon.com/images/I/81Of61VgwjL._AC_SX215_.jpg',
    gamerTag: 'Loupzzz'
  }])
  .then((games) => {
    console.log(`${games.length} games created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });

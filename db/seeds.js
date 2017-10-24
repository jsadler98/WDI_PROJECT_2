const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbUri } = require('../config/environment');
const Game = require('../models/game');
const User = require('../models/user');
mongoose.connect(dbUri, { useMongoClient: true });

// Require the model




// Drop the model
Game.collection.drop();
User.collection.drop();
// Create the models

User
  .create([
    {
      username: 'kenny',
      email: 'kenny@kenny.com',
      password: 'password',
      profilePicture: 'http://www.fillmurray.com/300/300',
      passwordConfirmation: 'password'
    },
    {
      username: 'josh',
      email: 'josh@josh.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'bobby',
      email: 'bobby@bobby.com',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      username: 'kate',
      email: 'kate@kate.com',
      password: 'password',
      profilePicture: 'http://www.fillmurray.com/300/300',
      passwordConfirmation: 'password'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were created!`);

    return Game.create([{
      game: 'Call of Duty WWII',
      console: 'Playstation4',
      prizeMoney: 2000,
      gamingWebsite: 'Game Battles',
      playersNeeded: 2,
      tournament: 'MLG Variant',
      image:'https://images-na.ssl-images-amazon.com/images/I/91wZRDbK4kL._SX342_.jpg',
      gamerTag: 'Scrufta',
      startTime: '3:30pm GMT',
      user: users[0],
      comments: [{ content: 'this is cool', user: users[1] }]
    },{
      game: 'Call of Duty Remastered',
      console: 'Playstation4',
      prizeMoney: 200000,
      gamingWebsite: 'Game Battles',
      playersNeeded: 1,
      tournament: 'MLG BO3',
      image:'https://images-na.ssl-images-amazon.com/images/I/81Of61VgwjL._AC_SX215_.jpg',
      gamerTag: 'Loupzzz',
      startTime: '8:30pm GMT',
      user: users[1],
      comments: [{ content: 'this is cool', user: users[2] }]
    }])
  })
  .then((games) => {
    console.log(`${games.length} games created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });


// Game
// .create([{
//   game: 'Call of Duty WWII',
//   console: 'Playstation4',
//   prizeMoney: 2000,
//   gamingWebsite: 'Game Battles',
//   playersNeeded: 2,
//   tournament: 'MLG Variant',
//   image:'https://images-na.ssl-images-amazon.com/images/I/91wZRDbK4kL._SX342_.jpg',
//   gamerTag: 'Scrufta',
//   startTime: '3:30pm GMT'
// },{
//   game: 'Call of Duty Remastered',
//   console: 'Playstation4',
//   prizeMoney: 200000,
//   gamingWebsite: 'Game Battles',
//   playersNeeded: 1,
//   tournament: 'MLG BO3',
//   image:'https://images-na.ssl-images-amazon.com/images/I/81Of61VgwjL._AC_SX215_.jpg',
//   gamerTag: 'Loupzzz',
//   startTime: '8:30pm GMT'
// }])
// .then((games) => {
//   console.log(`${games.length} games created!`);
// })
// .catch((err) => {
//   console.log(err);
// })
// .finally(() => {
//   mongoose.connection.close();
// });

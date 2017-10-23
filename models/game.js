const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  game: { type: String, required: true },
  console: { type: String, required: true },
  prizeMoney: { type: String },
  gamingWebsite: { type: String },
  playersNeeded: { type: Number },
  tournament: { type: String },
  image: { type: String },
  gamerTag:{type: String, required: true}

});

module.exports = mongoose.model('Game', gameSchema);

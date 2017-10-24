const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  if(typeof this.user.id === 'string') return this.user.id === user.id;
  return user.id === this.user.toString();
};


const gameSchema = new mongoose.Schema({
  game: { type: String, required: true },
  console: { type: String, required: true },
  prizeMoney: { type: String },
  gamingWebsite: { type: String },
  playersNeeded: { type: Number },
  tournament: { type: String },
  image: { type: String },
  gamerTag:{ type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ]
});


module.exports = mongoose.model('Game', gameSchema);

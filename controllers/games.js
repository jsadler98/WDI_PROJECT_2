const Game = require('../models/game');

function indexRoute(req, res, next) {
  Game
    .find()
    .populate('createdBy')
    .exec()
    .then((games) => res.render('games/index', { games }))
    .catch(next);
}

module.exports = {
    index: indexRoute
    //new: gamesNew,
  //  create: gamesCreate,
  //  delete: gamesDelete
}

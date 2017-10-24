const Game = require('../models/game');

function indexRoute(req, res, next) {
  Game
  .find()
  .populate('user')
  .exec()
  .then((games) => res.render('games/index', { games }))
  .catch(next);
}


function newRoute(req, res) {
  return res.render('games/new');
}

function createRoute(req, res, next) {
  // make changes here.
  req.body.user = req.session.userId

  Game
  .create(req.body)
  .then(() => res.redirect('/games'))
  .catch((err) => {
    console.log(err);
    if(err.name === 'ValidationError') return res.badRequest('/games/new', err.toString());
    next(err);
  });
}

function showRoute(req, res, next) {
  Game
  .findById(req.params.id)
  .populate('user comments.user')
  .exec()
  .then((game) => {
    if(!game) return res.notFound();
    return res.render('games/show', { game });
  })
  .catch(next);
}

function editRoute(req, res, next) {
  Game
  .findById(req.params.id)
  .exec()
  .then(game => {
    if(!game) return res.redirect();

    return res.render('games/edit', { game });
  })
  .catch(next);
}

function updateRoute(req, res, next) {
  Game
  .findById(req.params.id)
  .exec()
  .then(game => {
    if(!game) return res.notFound();
    for(const field in req.body) {
      game[field] = req.body[field];
    }

    return game.save();
  })
  .then(() => res.redirect(`/games/${req.params.id}`))
  .catch((err) => {
    if(err.name === 'ValidationError') return res.badRequest(`/games/${req.params.id}/edit`, err.toString());
    next(err);
  });
}

function deleteRoute(req, res, next) {
  Game
  .findById(req.params.id)
  .exec()
  .then(game => {
    // if(!game) return res.notFound();
    // if(!game.belongsTo(req.user)) return res.unauthorized('You do not have permission to delete that resource');
    return game.remove();
  })
  .then(() => res.redirect('/games'))
  .catch(next);
}

function createCommentRoute(req, res, next) {

  req.body.user = req.session.userId

  Game
  .findById(req.params.id)
  .exec()
  .then((game) => {
    if (!game) return res.notFound();


    game.comments.push(req.body);
    return game.save();
  })
  .then((game) => res.redirect(`/games/${req.params.id}`))
  .catch((err) => {
    if (err.name === 'ValidationError') res.badRequest(`/games/${req.params.id}`, err.toString());
    next(err);
  });
}

function deleteCommentRoute(req, res, next) {
  Game
  .findById(req.params.id)
  .exec()
  .then((game) => {
    if (!game) return res.notFound();
    if (!game.belongsTo(req.user)) return res.unauthorized('You do not have permission to delete that resource');
    const comment = game.comments.id(req.params.commentId);
    comment.remove();
    return game.save();
  })
  .then(game => res.redirect(`/games/${game.id}`))
  .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};

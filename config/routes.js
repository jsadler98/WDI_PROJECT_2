const express = require('express');
const router  = express.Router();
const registrations = require('../controllers/registrations');
const session = require('../controllers/session');
const gamesController = require('../controllers/games');

function sessionDelete(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      res.redirect('/login');
    });
  }

  return next();
}

router.get('/', (req, res) => res.render('homepage'));

router.route('/register')
.get(registrations.new)
.post(registrations.create);

router.route('/login')
.get(session.new)
.post(session.create);

router.route('/logout')
.get(session.delete);

router.route('/games')
.get(secureRoute, gamesController.index)
.post(secureRoute, gamesController.create);


router.route('/games/new')
.get(secureRoute, gamesController.new);

router.route('/games/:id')
.get(gamesController.show)
.put(gamesController.update)
.delete(gamesController.delete);

router.route('/games/:id/edit')
.get(gamesController.edit);

router.route('/games/:id/comments')
  .post(secureRoute, gamesController.createComment);

router.route('/games/:id/comments/:commentId')
  .delete(secureRoute, gamesController.deleteComment);



module.exports = router;

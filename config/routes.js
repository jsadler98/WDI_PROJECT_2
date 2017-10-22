const express = require('express');
const router  = express.Router();
const registrations  = require('../controllers/registrations');
const session       = require('../controllers/session');

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

// A home route
router.get('/', (req, res) => res.render('homepage'));

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

  router.route('/login')
  .get(session.new)
  .post(session.create);

  router.route('/logout')
  .get(session.delete);

  router.route('/films/:id')
  .get(films.show)
  .put(secureRoute, films.update)
  .delete(secureRoute, films.delete);

// RESTful routes
// All URLS should contain the PLURAL... don't chose octopus or people or something silly.

// INDEX

// NEW

// SHOW

// CREATE

// EDIT

// UPDATE

// DELETE


module.exports = router;

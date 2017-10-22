const express = require('express');
const router  = express.Router();
const registrations  = require('../controllers/registrations');
const session       = require('../controllers/session');

// A home route
router.get('/', (req, res) => res.render('homepage'));

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

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

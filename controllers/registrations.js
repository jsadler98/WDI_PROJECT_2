const User = require('../models/user');

function registrationsNew(req, res) {
  res.render('registrations/new');
}

function registrationsCreate(req, res) {
  User
    .create(req.body)
    .then((user) => {
      res.redirect('/');
    })
    .catch((err) => res.status(500).end(err));
    console.log(req.body);
}

module.exports = {
  new: registrationsNew,
  create: registrationsCreate
};

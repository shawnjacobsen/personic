const express = require('express');
const router = express.Router();
const genPassword = require('../lib/passwordUtils').genPassword;
const connection = require('../config/database');
const Account = connection.models.Account;
const passport = require('passport');
// const indexController = require('../controllers/indexController');

// login
//router.post('/login', passport.authenticate('local'), (req, res, next) => {});

// register route
router.post('/register', (req, res, next) => {
  const saltHash = genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;
  console.log(saltHash);

  const newAccount = new Account({
    username: req.body.username,
    hash: hash,
    salt: salt,
    position: {
      title: 'intern somewhere',
      companyId: 123456,
    },
    firstname: 'Shawn',
    lastname: 'Jacobsen',
  });

  console.log(newAccount);

  newAccount
    .save()
    .then((result) => {
      console.log(result);
      res.redirect(`/accounts/${newAccount._id}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

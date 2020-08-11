const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const Account = require('../models/account');
const validatePassword = require('../lib/passwordUtils').validatePassword;

const verifyCallback = (username, password, done) => {
  Account.findOne({ username: username })
    .then((account) => {
      if (!account) {
        return done(null, false);
      }

      const isValid = validatePassword(password, account.hash, account.salt);

      if (isValid) {
        return done(null, account);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      console.log(err);
      done(err);
    });
};

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser((account, done) => {
  done(null, account.id);
});

passport.deserializeUser((accountId, done) => {
  Account.findByIdAndDelete(accountId)
    .then((account) => {
      done(null, account);
    })
    .catch((err) => done(err));
});

const Account = require('../models/account');

const account_details = (req, res) => {
  const id = req.params.id;
  Account.find(id).then((result) => {
    res.send(JSON.stringify(result));
  });
};

const account_create = (req, res) => {
  const account = new Account(req.body);

  account
    .save()
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

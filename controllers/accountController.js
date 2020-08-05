const Account = require('../models/account');

const account_details = (req, res) => {
  const id = req.params.id;
  Account.findById(id).then((result) => {
    res.send(JSON.stringify(result));
  });
};

const account_post = (req, res) => {
  let data = JSON.parse(JSON.stringify(req.body));
  const position = {
    company: data.company,
    companyID: data.companyID,
    title: data.title,
  };

  delete data.company;
  delete data.companyID;
  delete data.title;
  data.position = position;

  const account = new Account(data);

  account
    .save()
    .then((result) => {
      res.redirect(`/accounts/${account._id}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
const account_delete = (req, res) => {
  const id = req.params.id;

  Account.findByIdAndDelete(id).then((result) => {
    res.redirect(`/accounts/`);
  });
};

module.exports = {
  account_details,
  account_post,
  account_delete,
};

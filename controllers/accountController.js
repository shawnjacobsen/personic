const connection = require('../config/database');
const Account = connection.models.Account;

const account_details = (req, res) => {
  console.log('account_details route');
  const id = req.params.id;
  Account.findById(id)
    .then((result) => {
      console.log('result:');
      console.log(result);
      res.send(JSON.stringify(result));
    })
    .catch((err) => console.log(err));
};

const account_delete = (req, res) => {
  const id = req.params.id;

  Account.findByIdAndDelete(id).then((result) => {
    res.redirect(`/accounts/`);
  });
};

module.exports = {
  account_details,
  account_delete,
};

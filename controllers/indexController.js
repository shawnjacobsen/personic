const connection = require('../config/database');
const Account = connection.models.Account;

const account_register_post = (res,req,next) => {
    const saltHash = genPassword(req.body.password);
  
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    console.log(saltHash);
  
    const newAccount = new Account({
      username: req.body.username,
      hash: hash,
      salt: salt,
      position: {
        title: req.body.title,
        companyName: req.body.CompanyName,
      },
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  
    console.log(newAccount);
  
    newAccount
      .save()
      .then((result) => {
        console.log(result);
        res.redirect(`/home`);
      })
      .catch((err) => {
        console.log(err);
        res.send('An Error occurred...')
      });
}

const account_login_post = (req,res,next) => {
    res.redirect('/home');
}


module.exports = {
    account_login_post,
    account_register_post,
};

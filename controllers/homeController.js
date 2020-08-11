const connection = require('../config/database');
const Account = connection.models.Account;

const home_get = (req,res,next) => {
    res.send('<p>you are logged in on the homepage</p>');
}

module.exports = {
    home_get
};
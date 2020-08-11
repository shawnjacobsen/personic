const mongoose = require('mongoose');
const AccountSchema = require('../models/account');

// AUTH
require('dotenv').config();
const DB_AUTH_USER = process.env.DB_USERNAME;
const DB_AUTH_PW = process.env.DB_PW;
const DB_AUTH_NAME = process.env.DB_NAME;

// connect to DB
const DB_URI = `mongodb+srv://${DB_AUTH_USER}:${DB_AUTH_PW}@cluster0.yp0on.mongodb.net/${DB_AUTH_NAME}?retryWrites=true&w=majority`;

const conn = mongoose.createConnection(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Account = conn.model('Account', AccountSchema);

// expose
module.exports = conn;

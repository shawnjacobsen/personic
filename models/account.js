const mongoose = require('mongoose');
const connection = require('../config/database');
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    position: {
      type: Object,
      required: true,
    },
    university: {
      type: String,
      required: false,
    },
    profilePic: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// const Account = connection.model('account', accountSchema);

module.exports = accountSchema;

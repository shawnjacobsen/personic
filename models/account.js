const mongoose = require('mongoose');
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
  },
  { timestamps: true }
);

const Account = mongoose.model('account', accountSchema);

module.exports = Account;

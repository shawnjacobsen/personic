const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    deckID: {
      type: Number,
      required: true,
    },
    hosts: {
      type: Array,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    hostCompanyID: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model('event', eventSchema);

module.exports = Event;

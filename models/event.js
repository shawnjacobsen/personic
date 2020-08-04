const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    DeckID: {
      type: Number,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    hosts: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    hostCompanyID: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Event = mongoose.model('event', eventSchema);

module.exports = Event;

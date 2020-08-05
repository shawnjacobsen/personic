const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema(
  {
    cards: {
      type: Array,
      required: true,
    },
    deckID: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Deck = mongoose.model('deck', deckSchema);

module.exports = Deck;

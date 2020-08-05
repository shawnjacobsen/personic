const Deck = require('../models/deck');

const deck_details = (req, res) => {
  const id = req.params.id;
  Deck.findById(id).then((result) => {
    res.send(JSON.stringify(result));
  });
};

const deck_post = (req, res) => {
  let data = JSON.parse(JSON.stringify(req.body));

  const hosts = JSON.parse('[' + data.hosts + ']');

  const deck = new Deck(data);
  deck.hosts = hosts;
  deck
    .save()
    .then((result) => {
      res.redirect(`/decks/${deck._id}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deck_delete = (req, res) => {
  const id = req.params.id;

  Deck.findByIdAndDelete(id).then((result) => {
    res.redirect(`/decks/`);
  });
};

module.exports = {
  deck_details,
  deck_post,
  deck_delete,
};

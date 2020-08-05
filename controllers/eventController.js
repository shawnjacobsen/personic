const Event = require('../models/event');

const event_details = (req, res) => {
  const id = req.params.id;
  Event.findById(id).then((result) => {
    res.send(JSON.stringify(result));
  });
};

const event_post = (req, res) => {
  let data = JSON.parse(JSON.stringify(req.body));

  const hosts = JSON.parse('[' + data.hosts + ']');

  const event = new Event(data);
  event.hosts = hosts;
  event
    .save()
    .then((result) => {
      res.redirect(`/events/${event._id}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const event_delete = (req, res) => {
  const id = req.params.id;

  Event.findByIdAndDelete(id).then((result) => {
    res.redirect(`/events/`);
  });
};

module.exports = {
  event_details,
  event_post,
  event_delete,
};

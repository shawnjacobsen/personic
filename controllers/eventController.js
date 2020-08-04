const Event = require('../models/event');

const event_details = (req, res) => {
  const id = req.params.id;
  Event.findById(id).then((result) => {
    res.send(JSON.stringify(result));
  });
};

const event_post = (req, res) => {
  console.log(req.body);
  let data = JSON.parse(JSON.stringify(req.body));
  const position = {
    company: data.company,
    companyID: data.companyID,
    title: data.title,
  };

  delete data.company;
  delete data.companyID;
  delete data.title;
  data.position = position;

  console.log(data);
  const event = new Event(data);
  console.log(event);

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

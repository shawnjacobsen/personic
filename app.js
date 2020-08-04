const express = require('express');
const app = express();
const { render } = require('ejs');
const mongoose = require('mongoose');
const DB_AUTH = require('./DB_auth.json');
const accountRoutes = require('./routes/accountRoutes');
const eventRoutes = require('./routes/eventRoutes');

// view engine (later changed to use REACT/ANGULAR)
app.set('view engine', 'ejs');

// PORT
const PORT = 3000;

// connect to DB
const DB_URI = `mongodb+srv://${DB_AUTH.username}:${DB_AUTH.password}@cluster0.yp0on.mongodb.net/${DB_AUTH.dbname}?retryWrites=true&w=majority`;
mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// middleware and static files --------------
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// routes -------------

// account routes
app.use('/accounts', accountRoutes);

// event routes
app.use('/events', eventRoutes);
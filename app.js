const express = require('express');
const app = express();
const session = require('express-session');
let passport = require('passport');
let crypto = require('crypto');
const { render } = require('ejs');
const MongoStore = require('connect-mongo')(session);
const connection = require('./config/database');
require('dotenv').config();

// view engine (later changed to use REACT)
app.set('view engine', 'ejs');

// PORT
const PORT = 3000;

/* ----------   SESSION SETUP   ---------- */

const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' });

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    },
  })
);

/* ----------   MIDDLEWARE & STATICS   ---------- */

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ----------   PASSPORT AUTH   ---------- */
require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.session);
  next();
});

/* ----------   ROUTES   ---------- */
const indexRoutes = require('./routes/indexRoutes');
const accountRoutes = require('./routes/accountRoutes');
const homeRoutes = require('./routes/homeRoutes');

app.use('/', indexRoutes);
app.use('/accounts', accountRoutes);
app.use('/home', homeRoutes);

// express listen on specified PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

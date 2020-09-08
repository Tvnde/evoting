const express = require('express');
const morgan = require('morgan');
const path = require('path');
const jsonwebtoken = require('jsonwebtoken');
const bodyparser = require('body-parser');
const flashShow = require('connect-flash');
const session = require('express-session');
/* const mongoose = require('mongoose'); */
const connector = require('./config/keys');
const assert = require('assert');
const cookieparser = require('cookie-parser');

const app = express();

app.set('views', 
        [path.join(__dirname, 'views'),
]);
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cookieparser());

app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

app.use(flashShow());



// Global variables
app.use(function(req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use('/', require('./routes/guest'));

module.exports = app;
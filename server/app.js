const express = require('express');
const routes = require('./routes');
const path = require('path');
const middleware = require('./middleware');

const app = express();

app.use(middleware.compression());
app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({ extended: false }));
app.use(middleware.bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', routes.api);

module.exports = app;
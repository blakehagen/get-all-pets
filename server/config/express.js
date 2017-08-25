// EXPRESS //
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

module.exports = () => {
  const app = express();

  if (process.env.NODE_ENV !== 'production') {
    app.use(express.static('dist/public'));
    app.use(logger('dev'));
  } else {
    app.use(express.static('server/public'));
  }

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app;
};

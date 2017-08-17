const fs = require('fs'); // eslint-disable-line jsx-a11y/href-no-hash
const path = require('path');
const Sequelize = require('sequelize');
const db = require('../config/db');

const sequelize = new Sequelize(db.development.url, {
  logging: false,
  dialect: db.development.dialect,
});

const models = {
  Sequelize,
  sequelize,
};

fs.readdirSync(__dirname)
  .filter(function (file) {
    return ((file.indexOf('.') !== 0) && (file !== 'index.js') && (path.extname(file) === '.js'));
  })
  .forEach(function (file) {
    const model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach(function (modelName) {
  if (models[modelName].init) {
    models[modelName].init(models);
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to postgres db has been established successfully.');
  })
  .catch((err) => {
    console.log('Error connecting to the postgres database: ', err);
    process.exit(1);
  });

module.exports = models;

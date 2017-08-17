const dbUrl = require('./secrets/dbSecret');
module.exports = { // eslint-disable-line jsx-a11y/href-no-hash
  development: {
    url: dbUrl.db,
    dialect: 'postgres',
  },
};

const dbUrl = require('./secrets/dbSecret');
module.exports = {
  development: {
    url: dbUrl.db,
    dialect: 'postgres',
  },
};

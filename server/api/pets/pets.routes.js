const petsCtrl = require('./pets.controller');

module.exports = (app) => {
  app.route('/api/v1/pets/create')
    .post(petsCtrl.createNewPet);
};

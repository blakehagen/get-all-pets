const petsCtrl = require('./pets.controller'); // eslint-disable-line jsx-a11y/href-no-hash

module.exports = (app) => {
  app.route('/api/v1/pets/create')
    .post(petsCtrl.createNewPet);
};

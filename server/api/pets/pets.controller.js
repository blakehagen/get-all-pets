const models = require('../../models/index');

module.exports = {

  createNewPet(req, res) {
    models.Pet.create(req.body)
      .then(pet => res.status(200).json({ pet, success: true }))
      .catch((err) => {
        console.log('err', err);
        return res.status(400).json({ err });
      });
  },
};

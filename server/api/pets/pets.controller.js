const models = require('../../models/index'); // eslint-disable-line jsx-a11y/href-no-hash

module.exports = {

  createNewPet(req, res) {
    models.Pets.create(req.body)
      .then((pet) => {
        return res.status(200).json({ pet, success: true });
      })
      .catch((err) => {
        console.log('err', err);
        return res.status(400).json({ err });
      });
  },
};

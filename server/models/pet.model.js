module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    type: DataTypes.TEXT,
    breed: DataTypes.TEXT,
    name: DataTypes.TEXT,
    age: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    birthday: DataTypes.TEXT,
    favoriteColor: DataTypes.TEXT,
    personality: DataTypes.ARRAY(DataTypes.TEXT),
  }, {
    tableName: 'pets',
    timestamps: true,
    classMethods: {
      init(_models) {
        let models = _models;
      },
    },
  });
  return Pet;
};

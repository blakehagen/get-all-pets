module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'pets',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        type: {
          type: Sequelize.TEXT,
        },
        breed: {
          type: Sequelize.TEXT,
        },
        name: {
          type: Sequelize.TEXT,
        },
        age: {
          type: Sequelize.TEXT,
        },
        gender: {
          type: Sequelize.TEXT,
        },
        birthday: {
          type: Sequelize.TEXT,
        },
        favoriteColor: {
          type: Sequelize.TEXT,
        },
        personality: {
          type: Sequelize.ARRAY(Sequelize.TEXT),
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      });
  },

  down(queryInterface) {
    return queryInterface.dropTable('pets');
  },
};

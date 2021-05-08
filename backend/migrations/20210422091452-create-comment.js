'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUSERS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'Users',
          key: 'id'
        }
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};
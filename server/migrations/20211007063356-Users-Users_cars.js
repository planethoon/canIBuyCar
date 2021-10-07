'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users_cars', 'userId', Sequelize.INTEGER);

    await queryInterface.addConstraint('Users_cars', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Users_cars.userId-fk',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Users_cars', 'Users_cars.userId-fk');
    await queryInterface.removeColumn('Users_cars', 'userId');
  },
};

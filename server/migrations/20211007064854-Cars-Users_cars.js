'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users_cars', 'carId', Sequelize.INTEGER);

    await queryInterface.addConstraint('Users_cars', {
      fields: ['carId'],
      type: 'foreign key',
      name: 'Users_cars.carId-fk',
      references: {
        table: 'Cars',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Users_cars', 'Users_cars.carId-fk');
    await queryInterface.removeColumn('Users_cars', 'carId');
  },
};

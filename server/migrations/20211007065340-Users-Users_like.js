'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users_likes', 'userId', Sequelize.INTEGER);

    await queryInterface.addConstraint('Users_likes', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Users_likes.userId-fk',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'Users_likes',
      'Users_likes.userId-fk'
    );
    await queryInterface.removeColumn('Users_likes', 'userId');
  },
};

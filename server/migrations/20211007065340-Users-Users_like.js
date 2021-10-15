'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users_comments', 'userId', Sequelize.INTEGER);

    await queryInterface.addConstraint('Users_comments', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'Users_comments.userId-fk',
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
      'Users_comments',
      'Users_comments.userId-fk'
    );
    await queryInterface.removeColumn('Users_comments', 'userId');
  },
};

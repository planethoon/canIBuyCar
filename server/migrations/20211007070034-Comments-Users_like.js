'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Users_likes',
      'commentId',
      Sequelize.INTEGER
    );

    await queryInterface.addConstraint('Users_likes', {
      fields: ['commentId'],
      type: 'foreign key',
      name: 'Users_likes.commentId-fk',
      references: {
        table: 'Comments',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'Users_likes',
      'Users_likes.commentId-fk'
    );
    await queryInterface.removeColumn('Users_likes', 'commentId');
  },
};

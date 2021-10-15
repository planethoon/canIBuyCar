'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Users_comments',
      'commentId',
      Sequelize.INTEGER
    );

    await queryInterface.addConstraint('Users_comments', {
      fields: ['commentId'],
      type: 'foreign key',
      name: 'Users_comments.commentId-fk',
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
      'Users_comments',
      'Users_comments.commentId-fk'
    );
    await queryInterface.removeColumn('Users_comments', 'commentId');
  },
};

'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users_comment.belongsTo(models.Users, {
        foreignKey: 'userId',
      });
      Users_comment.belongsTo(models.Comments, {
        foreignKey: 'commentId',
      });
    }
  }
  Users_comment.init(
    {
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Users_comment',
    }
  );
  return Users_comment;
};

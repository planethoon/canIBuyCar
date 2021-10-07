'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users_like.belongsTo(models.Users, {
        foreignKey: 'userId',
      });
      Users_like.belongsTo(models.Comments, {
        foreignKey: 'commentId',
      });
    }
  }
  Users_like.init(
    {
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Users_like',
    }
  );
  return Users_like;
};

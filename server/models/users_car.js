'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users_car.belongsTo(models.Users, {
        foreignKey: 'userId',
      });
      Users_car.belongsTo(models.Cars, {
        foreignKey: 'Id',
      });
    }
  }
  Users_car.init(
    {
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Users_car',
    }
  );
  return Users_car;
};

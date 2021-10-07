'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.hasMany(models.Users_car);
    }
  }
  Car.init(
    {
      brand: DataTypes.STRING,
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      price: DataTypes.INTEGER,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Car',
    }
  );
  return Car;
};

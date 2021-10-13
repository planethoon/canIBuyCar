'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    static associate(models) {
      // define association here
    }
  }
  Result.init(
    {
      year: DataTypes.INTEGER,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Result',
    }
  );
  return Result;
};

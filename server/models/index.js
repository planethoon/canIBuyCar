'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Car = require('./car')(sequelize, Sequelize);
db.Users_car = require('./users_car')(sequelize, Sequelize);
db.Users_comment = require('./users_comment')(sequelize, Sequelize);

module.exports = db;

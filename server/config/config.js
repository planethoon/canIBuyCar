const dotenv = require('dotenv');
dotenv.config();

const development = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,

  database: 'canIBuyCar',
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',

  port: proccess.env.DATABASE_PORT
};

const production = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,

  database: 'canIBuyCar',
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',

  port: proccess.env.DATABASE_PORT

};

const test = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,

  database: 'canIBuyCar',
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',

  port: proccess.env.DATABASE_PORT
};

module.exports = {development, production, test};


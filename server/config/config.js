const dotenv = require('dotenv');
dotenv.config();

const development = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,

  database: 'canIBuyCar',
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
};

const production = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,

  database: 'canIBuyCar',
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
};

const test = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,

  database: 'canIBuyCar',
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
};

module.exports = {development, production, test};


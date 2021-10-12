require('dotenv').config();
const env = process.env;

const development = {
  username: env.DATABASE_USER,
  password: null,
  database: 'canIBuyCar',
  host: env.DATABASE_HOST,
  dialect: 'mysql',
};

const production = {
  username: env.DATABASE_USER,
  password: null,
  database: 'canIBuyCar',
  host: env.DATABASE_HOST,
  dialect: 'mysql',
};

const test = {
  username: env.DATABASE_USER,
  password: null,
  database: 'canIBuyCar',
  host: env.DATABASE_HOST,
  dialect: 'mysql',
};

module.exports = {development, production, test};

const dotenv = require('dotenv');
dotenv.config();

console.log(
  'aaaaaa',
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  process.env.DATABASE_HOST,
  process.env.DATABASE_PORT
);

const development = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: 'canIBuyCar',
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
  port: process.env.DATABASE_PORT,
};

const production = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: 'canIBuyCar',
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
  port: process.env.DATABASE_PORT,
};

const test = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: 'canIBuyCar',
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
  port: process.env.DATABASE_PORT,
};

module.exports = {development, production, test};

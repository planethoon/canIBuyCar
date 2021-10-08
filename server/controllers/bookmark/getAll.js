const {User} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  console.log(req.params.id)
  res.status(200).send('hi')
};

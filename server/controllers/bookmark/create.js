const {Users_car} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const {userId, carId} = req.body;
  const bookmark = await Users_car.create({userId, carId});
  //생성하지만 userId, carId는 원래 스키마에 없어서인지 들어가지 않는다.
  console.log(bookmark);

  res.json({data: {bookmark}, message: '즐겨찾기 완료'});
};

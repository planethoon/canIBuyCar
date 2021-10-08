const {Users_car} = require('../../models');
const {User} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(403).send({message: '로그인이 필요합니다'});
  } else {
    const token = req.headers.authorization.split('Bearer ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userInfo = await User.findOne({
      where: {email: data.email},
    });

    if (userInfo) {
      const carId = req.body;
      const userId = userInfo.dataValues.id;
      const bookmark = await Users_car.create({userId, carId});
      //생성하지만 userId, carId는 원래 스키마에 없어서인지 들어가지 않는다.
      console.log(bookmark);
      res.json({data: {bookmark}, message: '즐겨찾기 완료'});
    }
  }
};

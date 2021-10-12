const {User} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401).json({message: '권한 없음'});
  } else {
    const token = req.headers.authorization.split('Bearer ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userInfo = await User.findOne({
      where: {email: data.email},
    });
    if (userInfo && req.body.password === userInfo.dataValues.password) {
      res.status(200).json({message: '개인정보 수정 가능'})
    } else {
      res.status(401).json({message: '권한 없음'});
    }
  }
};
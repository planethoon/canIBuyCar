const {User} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401).sned({message: '로그아웃 실패'});
  } else {
    const token = req.headers.authorization.split('Bearer ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userInfo = await User.findOne({
      where: {email: data.email},
    });
    if (userInfo) {
      res.status(200).send({message: '로그아웃 성공'});
    } else {
      res.status(401).send({message: '로그아웃 실패'});
    }
  }
};

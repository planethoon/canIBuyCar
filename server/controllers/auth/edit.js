const {User} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401).sned({message: '회원정보 수정 실패'});
  } else {
    const token = req.headers.authorization.split('Bearer ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userInfo = await User.findOne({
      where: {email: data.email},
    });
    if (userInfo) {
      // 데이터베이스 정보 수정
      // User.update({

      // })
      res
        .status(200)
        .json({data: {userId: userInfo.id}, message: '회원정보 수정 성공'});
    } else {
      res.status(401).json({message: '회원정보 수정 실패'});
    }
  }
};

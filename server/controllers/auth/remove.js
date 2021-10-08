const {User} = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401).sned({message: '회원탈퇴 실패'});
  } else {
    const token = req.headers.authorization.split('Bearer ')[1];
    const data = jwt.verify(token, 'abc');
    const userInfo = await User.findOne({
      where: {email: data.email},
    });
    if (userInfo) {
      // 데이터베이스 해당 정보 삭제
      User.destroy({
        where: {email: userInfo.email},
      });
      res.status(204).send({message: '회원탈퇴 성공'});
    } else {
      res.status(401).send({message: '회원탈퇴 실패'});
    }
  }
};

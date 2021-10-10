const {User} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401).json({message: '회원탈퇴 실패'});
  } else {
    const token = req.headers.authorization.split('Bearer ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userInfo = await User.findOne({
      where: {email: data.email},
    });
    if (userInfo) {
      User.destroy({
        where: {email: userInfo.email},
      });
      res.sendStatus(204);
    } else {
      res.status(401).json({message: '회원탈퇴 실패'});
    }
  }
};

const { User } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(401).json({ message: '회원정보 수정 실패' });
  } else {
    const token = req.headers.authorization.split('Bearer ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userInfo = await User.findOne({
      where: { email: data.email },
    });
    if (userInfo) {
      const query = `UPDATE Users SET username='${req.body.username}', password='${req.body.password}'
      WHERE email='${userInfo.dataValues.email}';`;
      const editUser = await User.sequelize.query(query);
      const user = userInfo.dataValues;
      delete user.password;

      const accessToken = jwt.sign(user, process.env.ACCESS_SECRET, {
        expiresIn: '3d',
      });
      const refreshToken = jwt.sign(user, process.env.REFRESH_SECRET, {
        expiresIn: '4d',
      });
      res
        .status(200)
        .cookie('refreshToken', refreshToken, { httpOnly: true })
        .json({ data: { accessToken, userId: user.id, userName: user.username, message: '회원정보 수정 성공' } });
    } else {
      res.status(401).json({ message: '회원정보 수정 실패' });
    }
  }
};

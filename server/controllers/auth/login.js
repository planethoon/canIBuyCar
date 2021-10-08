const {User} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({
    where: {email, password},
  });

  if (!user) {
    return res.status(404).json({message: '존재하지 않는 사용자입니다.'});
  }
  const userInfo = user.dataValues;
  delete userInfo.password;
  const accessToken = jwt.sign(userInfo, process.env.ACCESS_SECRET, {
    expiresIn: '3d',
  });
  const refreshToken = jwt.sign(userInfo, process.env.REFRESH_SECRET, {
    expiresIn: '4d',
  });

  res
    .status(200)
    .cookie('refreshToken', refreshToken, {httpOnly: true})
    .json({data: {accessToken}});
};

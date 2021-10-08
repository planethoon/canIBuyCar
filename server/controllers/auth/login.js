const {User} = require('../../models');
const jwt = require('jsonwebtoken');

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
  console.log(process.env.ACCESS_SECRET); // 이거 왜 안찾아지지
  const accessToken = jwt.sign(userInfo, 'abc', {
    expiresIn: '3d',
  });
  const refreshToken = jwt.sign(userInfo, 'def', {
    expiresIn: '4d',
  });

  res
    .status(200)
    .cookie('refreshToken', refreshToken, {httpOnly: true})
    .json({data: {accessToken}});
};

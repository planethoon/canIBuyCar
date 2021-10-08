const {User} = require('../../models');

module.exports = async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({
    where: {email, password},
  });

  if (!user) {
    return res.status(404).json({message: '존재하지 않는 사용자입니다.'});
  }

  const userInfo = user.getDataValue;
  delete userInfo.password;

  res.json({data: {userInfo}});
};

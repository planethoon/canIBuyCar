const {User} = require('../../models');

module.exports = async (req, res) => {
  const {email, password, username} = req.body;
  const user = await User.findOne({
    where: {email},
  });
  if (user) {
    return res.status(409).json({message: '이미 존재하는 이메일입니다.'});
  }
  const userId = await User.create({email, password, username}).then(
    (data) => data.dataValues.id
  );
  console.log(userId);

  res.json({data: {userId}});
};

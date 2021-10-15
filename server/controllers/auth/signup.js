const {User} = require('../../models');

module.exports = async (req, res) => {
  const {email, password, username} = req.body;

  const userData = await User.create({email, password, username}).then(
    (data) => data.dataValues
  );
  res.json({data: {userId: userData.id, userName: userData.username}});
};

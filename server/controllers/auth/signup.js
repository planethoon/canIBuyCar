const {User} = require('../../models');

module.exports = {
  emailValidate: async (req, res) => {
    const email = req.body.email;
    const user = await User.findOne({
      where: {email},
    });
    if (user) {
      return res.status(409).json({message: '이미 존재하는 이메일입니다.'});
    } else {
      return res.status(200).json({message: '가입 가능한 이메일입니다'});
    }
  },
  create: async (req, res) => {
    const {email, password, username} = req.body;

    const userData = await User.create({email, password, username}).then(
      (data) => data.dataValues
    );
    res.json({data: {userId: userData.id, userName: userData.username}});
  },
};

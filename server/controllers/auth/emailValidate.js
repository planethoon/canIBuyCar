const {User} = require('../../models');

module.exports = async (req, res) => {
  console.log('aaaaaa', req.body);
  const email = req.body.email;
  try {
    const user = await User.findOne({
      where: {email},
    });
  } catch {
    return res.status(400).json({message: '뭔가 문제가 있어'});
  }

  if (user) {
    return res.status(409).json({message: '이미 존재하는 이메일입니다.'});
  } else {
    return res.status(200).json({message: '가입 가능한 이메일입니다'});
  }
};

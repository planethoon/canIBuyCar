const {User} = require('../../models');
const {Comment} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(403).send({message: '삭제 권한이 없습니다'});
  } else {
    const token = req.headers.authorization.split('Bearer ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userInfo = await User.findOne({
      where: {email: data.email},
    });

    if (!userInfo) {
      res.status(403).send({message: '삭제 권한이 없습니다'});
    } else {
      const query = `SELECT userId FROM Comments WHERE id='${req.params.id}'`;
      const comment = await Comment.sequelize.query(query);
      const userId = comment[0][0].userId;
      console.log(userId);
      console.log(userInfo.dataValues.id);
      if (userId === userInfo.dataValues.id) {
        await Comment.destroy({
          where: {id: req.params.id},
        });
        res.sendStatus(204);
      } else {
        res.status(403).send({message: '삭제 권한이 없습니다'});
      }
    }
  }
};

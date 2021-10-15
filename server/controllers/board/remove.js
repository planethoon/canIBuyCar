const {User, Users_comment} = require('../../models');
const {Comment} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(403).json({message: '삭제 권한이 없습니다'});
  } else {
    const token = req.headers.authorization.split('Bearer ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userInfo = await User.findOne({
      where: {email: data.email},
    });

    if (!userInfo) {
      res.status(403).json({message: '삭제 권한이 없습니다'});
    } else {
      const query = `SELECT userId FROM Comments WHERE id='${req.params.id}'`;
      const comment = await Comment.sequelize.query(query);
      if (!comment[0][0]) {
        res.status(404).json({message: '해당 글이 존재하지 않습니다'});
      }
      const userId = comment[0][0].userId;
      if (userId === userInfo.dataValues.id) {
        await Users_comment.destroy({
          where: {commentId: req.params.id},
        });
        await Comment.destroy({
          where: {id: req.params.id},
        });
        res.sendStatus(204);
      } else {
        res.status(403).json({message: '삭제 권한이 없습니다'});
      }
    }
  }
};

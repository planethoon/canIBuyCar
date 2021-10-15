const {Users_comment} = require('../../models');
const {User} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(403).json({message: '권한이 없습니다'});
  } else {
    const token = req.headers.authorization.split('Bearer ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userInfo = await User.findOne({
      where: {email: data.email},
    });

    if (userInfo) {
      const commentId = req.params.id;
      const userId = userInfo.dataValues.id;
      const query = `INSERT INTO Users_comments (userId, commentId, createdAt, updatedAt) 
      VALUES ('${userId}', '${commentId}', '${new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')}','${new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')}')`;
      const usercommentId = await Users_comment.sequelize.query(query);

      const query2 = `SELECT Users_comments.userId FROM Users_comments 
      WHERE Users_comments.commentId=${commentId}`;
      const userData = await Users_comment.sequelize.query(query2);

      res
        .status(201)
        .json({data: {userData: userData[0]}, message: '좋아요 완료'});
    } else {
      res.status(403).json({message: '권한이 없습니다'});
    }
  }
};

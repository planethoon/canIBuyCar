const {Comment} = require('../../models');
const {User} = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res.status(403).send({message: '로그인이 필요합니다'});
  } else {
    const token = req.headers.authorization.split('Bearer ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET);
    const userInfo = await User.findOne({
      where: {email: data.email},
    });
    if (userInfo) {
      const text = req.body.text;
      const userId = userInfo.dataValues.id;
      const query = `INSERT INTO Comments (userId, text, createdAt, updatedAt) 
      VALUES ('${userId}', '${text}', '${new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')}','${new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')}')`;
      const commentId = await Comment.sequelize.query(query);
      const comment = await Comment.findOne({
        where: {id: commentId},
      });
      res.status(201).json({data: {comment}});
    } else {
      res.satus(400).json({message: '잘못된 요청입니다'});
    }
  }
};

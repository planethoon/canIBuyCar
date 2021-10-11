const {Comment} = require('../../models');
const {Users_comment} = require('../../models');

module.exports = async (req, res) => {
  const query = `SELECT * FROM Comments`;
  const comments = await Comment.sequelize.query(query);
  let commentIdList = comments[0].map((el) => el.id);
  let likeUserList = [];
  for (let i of commentIdList) {
    const query = `SELECT commentId, userId FROM Users_comments WHERE commentId = ${i}`;
    const likeUser = await Users_comment.sequelize.query(query);
    likeUserList.push(likeUser[0]);
  }
  res
    .status(200)
    .json({data: {commentsData: comments, likeData: likeUserList}});
};

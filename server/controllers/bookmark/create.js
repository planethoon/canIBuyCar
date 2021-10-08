const {Users_car} = require('../../models');
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
      const carId = req.body.carId;
      const userId = userInfo.dataValues.id;
      console.log(userId);
      const query = `INSERT INTO Users_cars (userId, carId, createdAt, updatedAt) 
      VALUES ('${userId}', '${carId}', '${new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')}','${new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')}')`;
      const bookmarkId = await Users_car.sequelize.query(query);

      res.json({data: {bookmarkId: bookmarkId[0]}, message: '즐겨찾기 완료'});
    }
  }
};

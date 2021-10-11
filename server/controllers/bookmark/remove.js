const {User} = require('../../models');
const {Users_car} = require('../../models');
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

    const query = `SELECT Users_cars.carId FROM Users_cars 
    INNER JOIN Users ON (${userInfo.id} = Users_cars.userId)
    INNER JOIN Cars ON (${req.params.id} = Users_cars.carId);`;
    const findBookmark = await User.sequelize.query(query);

    if (userInfo && findBookmark[0][0] !== undefined) {
      Users_car.destroy({
        where: {carId: findBookmark[0][0].carId, userId: userInfo.id},
      });
      res.sendStatus(204);
    } else {
      res.status(403).json({message: '삭제 권한이 없습니다'});
    }
  }
};

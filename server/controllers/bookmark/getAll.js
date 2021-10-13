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
      const query = `SELECT Cars.id, Cars.img, Cars.brand, Cars.name FROM Cars 
      INNER JOIN Users_cars ON (Users_cars.carId = Cars.id)
      INNER JOIN Users ON (${req.params.id} = Users_cars.userId);`;

      const findBookmark = await User.sequelize.query(query);
      if (findBookmark[0][0] === undefined) {
        res.status(403).json({message: '권한이 없습니다'});
      } else {
        res.status(200).json({data: findBookmark[0]});
      }
    }
  }
};

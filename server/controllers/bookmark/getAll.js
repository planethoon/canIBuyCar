const {User} = require('../../models');
//토큰검증해서 userId일치 설정
module.exports = async (req, res) => {
  const query = `SELECT Cars.id, Cars.img, Cars.brand, Cars.name FROM Cars 
  INNER JOIN Users_cars ON (Users_cars.carId = Cars.id)
  INNER JOIN Users ON (${req.params.id} = Users_cars.userId);`;

  const findBookmark = await User.sequelize.query(query);
  console.log(findBookmark[0]);
  if (findBookmark[0][0] === undefined) {
    res.status(403).json({message: '권한이 없습니다'});
  } else {
    res.status(200).json({data: findBookmark[0]});
  }
};

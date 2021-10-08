const {User} = require('../../models');

module.exports = async (req, res) => {
  const query = `SELECT Cars.id FROM Cars 
  INNER JOIN Users_cars ON (Users_cars.carId = Cars.id)
  INNER JOIN Users ON (${req.params.id} = Users_cars.userId);`

  const findBookmark = await User.sequelize.query(query)
  console.log(findBookmark[0][0].id)
  if(findBookmark[0][0] === undefined) {
    res.status(402).send({message: '권한이 없습니다'})
  } else {
    res.status(200).send({data: findBookmark})
  }
};

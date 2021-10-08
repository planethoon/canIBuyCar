const {Car} = require('../../models');
const {Users_car} = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const {brand, name} = req.query;
  if (!brand) {
    res.status(404).json({message: '해당 제조사 차량을 찾을 수 없습니다'});
  }
  if (!name) {
    let cars = await Car.findAll({
      where: {brand},
    }).then((data) => data.map((el) => el.dataValues));
    if (!cars) {
      res.status(404).json({message: '해당 제조사 차량을 찾을 수 없습니다'});
    } else {
      cars = cars.map((el) => {
        const userId = Users_car.findAll({
          where: {carId: el.id},
        }).then((data) => {
          console.log(data.dataValues);
          return {...el, userId};
        });
      });
      console.log(cars);

      res.status(200);
    }
  }
  res.status(200);
};

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
    });
    if (cars.length === 0) {
      res.status(404).json({message: '해당 제조사 차량을 찾을 수 없습니다'});
    } else {
      cars = cars.map((el) => el.dataValues);
      res.status(200).json({data: cars, message: '차 정보 조회 성공'});
      // 즐찾 정보가 조회되지 않고있음

      // cars = cars.map((el) => {
      //   const userId = Users_car.findAll({
      //     where: {carId: el.id},
      //   }).then((data) => {
      //     console.log(data.dataValues);
      //     return {...el, userId};
      //   });
      // });
    }
  } else {
    let car = await Car.findOne({
      where: {brand, name},
    });
    if (!car) {
      res.status(404).json({message: '해당 차량을 찾을 수 없습니다'});
    } else {
      res
        .status(200)
        .json({data: car.dataValues, message: '차 정보 조회 성공'});
    }
  }
};

const {Car} = require('../../models');
const {Users_car} = require('../../models');

module.exports = async (req, res) => {
  const {brand, name} = req.query;
  if (!name) {
    const query = `SELECT * from Cars WHERE brand='${brand}'`;
    const cars = await Car.sequelize.query(query);
    if (cars[0].length === 0) {
      res.status(404).json({message: '해당 제조사 차량을 찾을 수 없습니다'});
    } else {
      const carData = cars[0];
      //carId: 805, carId: 806

      const query = `SELECT Users_cars.userId, Users_cars.carId from Users_cars
       INNER JOIN Cars ON Users_cars.carId = Cars.id
       WHERE brand='${brand}'`;

      let bookmarkData = await Users_car.sequelize.query(query);
      bookmarkData = bookmarkData[0];

      res.status(200).json({data: {carData, bookmarkData}});
    }
  }
};

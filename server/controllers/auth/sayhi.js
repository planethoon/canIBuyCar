const {Car} = require('../../models');

module.exports = async (req, res) => {
  const car = await Car.findOne({
    where: {brand: 'BMW'},
  });
  console.log(car.dataValues);

  res.send({message: 'a'});
};

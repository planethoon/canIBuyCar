const {Car} = require('../../models');

module.exports = async (req, res) => {
  console.log(Car);
  const car = await Car.findAll({
    where: {brand: 'BMW'},
  });
  console.log(car);

  res.send({message: 'a'});
};

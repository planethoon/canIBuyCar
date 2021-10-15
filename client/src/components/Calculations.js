const getYear = (price, saving) => {
  price = Math.floor(price);
  const date = new Date();
  return date.getFullYear() - Math.ceil(price / saving / 12);
};

const getGukbab = (price) => {
  price = Math.floor(price);
  return Math.floor(price / 0.7);
};

const getTimesForApt = (price) => {
  price = Math.floor(price);
  const aptPrice = 110000;
  return Math.round((price / aptPrice) * 100);
};

export { getYear, getGukbab, getTimesForApt };

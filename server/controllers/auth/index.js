module.exports = {
  signup: require('./signup').create,
  emailvalidate: require('./signup').emailValidate,
  login: require('./login'),
  logout: require('./logout'),
  remove: require('./remove'),
  edit: require('./edit'),
  password: require('./password'),
};

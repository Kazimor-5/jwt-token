const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/customError');

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }
  res.send('login');
};

const dashboard = (req, res) => {
  res.send('dashboard');
};

module.exports = { login, dashboard };

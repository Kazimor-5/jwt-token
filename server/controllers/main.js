const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/customError');

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }

  const luckyNumber = Math.floor(Math.random() * 100);

  res.send(200).json({
    msg: `hello ${username}!`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

const dashboard = (req, res) => {
  res.send('dashboard');
};

module.exports = { login, dashboard };

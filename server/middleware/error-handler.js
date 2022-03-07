const errorHandlerMiddleware = (err, req, res, next) => {
  res.status(500).json({ msg: 'Something went wrong, please try again later' });
};

module.exports = errorHandlerMiddleware;

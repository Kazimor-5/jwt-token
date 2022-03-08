const CustomAPIError = require('./customError');
const { StatusCodes, METHOD_FAILURE } = require('http-status-codes');

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;

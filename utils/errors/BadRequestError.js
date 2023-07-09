const { ERROR_CODE } = require('../constants');

module.exports = class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE.BAD_REQUEST;
  }
};

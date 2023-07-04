const { ERROR_CODE } = require('../constants');

module.exports = class NotFound extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE.NOT_FOUND;
  }
};

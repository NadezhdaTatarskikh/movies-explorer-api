const { ERROR_CODE } = require('../constants');

module.exports = class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = ERROR_CODE.CONFLICT;
  }
};

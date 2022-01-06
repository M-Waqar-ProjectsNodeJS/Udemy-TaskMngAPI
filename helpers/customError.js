class NotFoundError extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statuscode = statuscode;
  }
}

const createNotFoundError = (message, statuscode) => {
  return new NotFoundError(message, statuscode);
};

module.exports = {
  NotFoundError,
  createNotFoundError,
};

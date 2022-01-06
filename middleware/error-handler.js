const { NotFoundError } = require("../helpers/customError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundError) {
    res.status(err.statuscode).json({
      message: err.message,
    });
  } else {
    res.status(500).json({
      message: err.message,
      error: err,
    });
  }
};

module.exports = errorHandler;

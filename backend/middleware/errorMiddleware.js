const dotenv = require("dotenv").config();
const errorHandler = (err, req, res, next) => {
  const status = res.statusCode || 500;
  res.status(status);

  res.json({
    message: err.message,
    stack:
      process.env.NODE_ENV == "production" ? "production mode!!" : err.stack,
  });
};
module.exports = { errorHandler };

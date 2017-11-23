import { config } from "../config";

function log(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function server(err, req, res, next) {
  err = config.env === "production"
    ? {}
    : err;

  res.status(500);
  res.render("error", {
    message: err.message,
    error: err
  });
}

export {
  log,
  server
}

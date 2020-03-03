function isProduction() {
  return process.env.NODE_ENV === "production";
}

module.exports = (err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.json({message: err.message, error: isProduction() ? "Error on prod" : err.stack});
}

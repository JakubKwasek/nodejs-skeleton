module.exports = (db = null) => {
  const router = require("express").Router();
  const { config } = require("./config");
  const { getAllBooksCtrl } = require("./controller")(db);
  const { testMiddleware } = require("./middlewares/testMiddleware")({});

  router.get(config.routes.BOOKS, testMiddleware, getAllBooksCtrl);
  return router;
}
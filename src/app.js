module.exports = (db = null, configs = {}) => {
  const express = require("express");
  const app = express();

  const bookStore = require("./modules/bookStore")(db);
  const notFound = require("./modules/notFound");
  const error = require("./modules/error");

  app.set("view engine", "hbs");

  app.use(express.json());
  app.use(bookStore)
  app.use(notFound);
  app.use(error);

  return app;
}
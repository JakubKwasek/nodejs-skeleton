module.exports = (db = null, configs = {}) => {
  const express = require("express");
  const path = require("path");
  const app = express();

  const {notFoundPage} = require("./handlers/notFound");
  const {errorPage} = require("./handlers/errorPage");

  app.set("views", path.join(__dirname, "views"))
  app.set("view engine", "ejs");
}
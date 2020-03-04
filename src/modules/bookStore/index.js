module.exports = (db = null) => {
	const router = require("express").Router();
	const { getAllBooksCtrl } = require("./controllers/getAllBooksCtrl")(db);
	const { testMiddleware } = require("./middlewares/testMiddleware")({});

	router.get("/books", testMiddleware, getAllBooksCtrl);

	return router;
}

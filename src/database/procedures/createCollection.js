const MongoClient = require("mongodb").MongoClient;
const { db } = require("../../configs/index.json");

MongoClient.connect(db.url, function(err, db) {
	if (err) throw err;
	const dbo = db.db("bookstore");
	dbo.createCollection("books", function(err, res) {
		if (err) throw err;
		console.log("Collection created!");
		db.close();
	});
});

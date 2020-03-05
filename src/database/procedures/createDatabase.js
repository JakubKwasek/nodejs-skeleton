const MongoClient = require("mongodb").MongoClient;
const { db } = require("../../configs/index.json");

MongoClient.connect(db.url, function(err, db) {
	if (err) throw err;
	console.log("Database created!");
	db.close();
});

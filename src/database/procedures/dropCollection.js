const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	const dbo = db.db("bookstore");
	dbo.collection("books").drop(function(err, delOK) {
		if (err) throw err;
		if (delOK) console.log("Collection deleted");
		db.close();
	});
});

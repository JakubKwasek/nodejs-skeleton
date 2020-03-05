const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	const dbo = db.db("bookstore");
	const myobj = [
		{
			"title": "Elon Musk. Biografia twórcy PayPala, Tesli, SpaceX",
			"author": "Vance Ashlee",
		},
		{
			"title": "Mit przedsiębiorczości",
			"author": "Gerber Michael E",
		}
	];
	dbo.collection("books").insertMany(myobj, function(err, res) {
		if (err) throw err;
		console.log("Document(s) inserted");
		db.close();
	});
});

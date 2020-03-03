module.exports = dbConfigs => {
	const MongoClient = require("mongodb").MongoClient;
	return MongoClient
		.connect(dbConfigs.url)
		.then(client => client.db())    
}

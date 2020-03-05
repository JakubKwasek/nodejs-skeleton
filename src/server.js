(async () => {
	const { server, db } = require("../configs/index.json");
	const dbConnection = await require("./database")(db);
	const app = require("./app")(dbConnection, server);

	app.listen(server.port, () => {
		console.log(`${server.startMessage} ${server.port}`)
	})
})()

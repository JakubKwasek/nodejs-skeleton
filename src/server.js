(async () => {
  const { server, db } = require("./configs");
  // const dbConnection = await require("./db")(db);
  const dbConnection = {};
  const app = require("./app")(dbConnection, server);

  app.listen(server.port, () => {
    console.log(`${server.startMessage} ${server.port}`)
  })
})()
(async () => {
  const configs = require("./configs/");
  const db = await require("./db/");
  const app = require("./app/")(db);

  app.listen(configs.server.port, () => {
    console.log(`${configs.server.startMessage} ${configs.server.port}`)
  })
})()
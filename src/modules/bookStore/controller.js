module.exports = (db = null) => {
  const path = require("path");
  // const model = require("./model")(db);

  return {
    async getAllBooksCtrl(req,res,next) {
      // const books = await model.findAll()
      res.format({
        "text/html"() {
          res.render(
            path.join(__dirname, "/views/books"), 
            { 
              books: {description: "test description" }, 
              layout:  path.join("../", "src/modules/bookStore/views/layout"), 
            }
          )
        },
        "application/json"() {
          res.json({test: "json response"})
        },
        "default"() {
          res.json({test: "json response"})
        }
      })
    }
  }
}

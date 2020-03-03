module.exports = (data) => {
  return {
    testMiddleware(req,res,next) {
      console.log("testmiddleware")
      next();
    }
  }
}

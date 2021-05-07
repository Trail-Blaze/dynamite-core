module.exports = (app) => {  
  //socialban api
  app.get("/socialban/api/public/v1/:accountId", (req, res) => {
    res.status(204).end();
  });
}

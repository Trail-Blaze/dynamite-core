module.exports = (app) => {
  //content controls api
  
  app.get("/content-controls/:accountId", function (req, res) {
    res.status(204).end();
  });
};

module.exports = (app) => {
  //waiting room returns with not content
  app.get("/waitingroom/api/waitingroom", (req, res) => {
    res.status(204).end();
  });
}

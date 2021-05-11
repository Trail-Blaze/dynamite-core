module.exports = (app) => {
  //waiting room returns with no content
  app.get("/waitingroom/api/waitingroom", (req, res) => {
    res.status(204).end();
  });
}

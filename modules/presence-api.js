module.exports = (app) => {
  //game presence
  app.get(
    "/presence/api/v1/_/:accountId/settings/subscriptions",
    (req, res) => {
      res.status(204).end();
    }
  );
};  

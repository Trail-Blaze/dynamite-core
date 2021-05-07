  //party
  app.get("/party/api/v1/Fortnite/user/:accountId", (req, res) => {
    res.json({
      current: [],
      pending: [],
      invites: [],
      pings: [],
    });
  });
  
  app.get(
    "/party/api/v1/Fortnite/user/:accountId/notifications/undelivered/count",
    (req, res) => {
      res.status(204).end();
    }
  );

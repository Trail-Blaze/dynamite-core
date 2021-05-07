
  //external auth
  app.get(
    "/account/api/public/account/:accountId/externalAuths",
    (req, res) => {
      res.json([]);
    }
  );

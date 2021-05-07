
  //blocked people list
  app.get("/friends/api/public/blocklist/:accountId", (req, res) => {
    res.json({
      blockedUsers: [],
    });
  });

  //setting for account
  app.get("/friends/api/v1/:accountId/settings", (req, res) => {
    res.json({
      acceptInvites: "public",
    });
  });

  //recent players interacted with
  app.get(
    "/friends/api/public/list/fortnite/:accountId/recentPlayers",
    (req, res) => {
      res.json([]);
    }
  );

  //friends list
  app.get("/friends/api/public/friends/:accountId", (req, res) => {
    res.json([]);
  });

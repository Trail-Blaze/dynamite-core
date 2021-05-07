
  app.post("/api/v1/assets/Fortnite/:version/:netcl", (req, res) => {
    res.json({
      FortPlaylistAthena: {
        meta: {
          promotion: 0,
        },
        assets: {},
      },
    });
  });

  //external auth
  app.get(
    "/account/api/public/account/:accountId/externalAuths",
    (req, res) => {
      res.json([]);
    }
  );

  //waiting room returns with not content
  app.get("/waitingroom/api/waitingroom", (req, res) => {
    res.status(204).end();
  });

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

  //data router
  app.post("/datarouter/api/v1/public/*", (req, res) => {
    res.status(204).end();
  });

  //game presence
  app.get(
    "/presence/api/v1/_/:accountId/settings/subscriptions",
    (req, res) => {
      res.status(204).end();
    }
  );
  app.get(
    "/party/api/v1/Fortnite/user/:accountId/notifications/undelivered/count",
    (req, res) => {
      res.status(204).end();
    }
  );

  app.get("/socialban/api/public/v1/:accountId", (req, res) => {
    res.status(204).end();
  });

  app.get("/content-controls/:accountId", function (req, res) {
    res.status(204).end();
  });

  //slug and whatnot
  app.get(
    "/affiliate/api/public/affiliates/slug/:affiliateName",
    (req, res) => {
      res.json({
        id: "aabbccddeeff11223344556677889900",
        slug: req.params.affiliateName,
        displayName: req.params.affiliateName,
        status: "ACTIVE",
        verified: true,
      });
    }
  );

  //party
  app.get("/party/api/v1/Fortnite/user/:accountId", (req, res) => {
    res.json({
      current: [],
      pending: [],
      invites: [],
      pings: [],
    });
  });

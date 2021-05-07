
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


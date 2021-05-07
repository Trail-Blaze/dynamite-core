const axios = require("axios");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");

module.exports = (app) => {
  
  //version check
  app.get("/fortnite/api/v2/versioncheck/:version", (req, res) => {
    res.json({ type: "NO_UPDATE" });
  });

  //privacy
  app.get("/fortnite/api/game/v2/privacy/account/:accountId", (req, res) => {
    res.json({
      accountId: req.params.accountId,
      optOutOfPublicLeaderboards: false,
    });
  });

  //enabled features
  app.get("/fortnite/api/game/v2/enabled_features", (req, res) => {
    res.json([]);
  });

  //grant access
  app.post("/fortnite/api/game/v2/grant_access/:accountId", (req, res) => {
    res.status(204).end();
  });

  //receipt for Epic Games purchase
  app.get(
    "/fortnite/api/receipts/v1/account/:accountId/receipts",
    (req, res) => {
      res.json([]);
    }
  );

  //platform
  app.post(
    "/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId",
    (req, res) => {
      res.set("Content-Type", "text/plain");
      res.send(true);
    }
  );


  //STUFF I STOLE FROM NEONITE

  //cloudstorage
  app.get("/fortnite/api/cloudstorage/system", async (req, res) => {
    //inspiration: https://github.com/AlexDev404/AuroraFN-Backend/blob/3db03fa403387b7e829304e947f6e24fe9c3fa6c/routes/services/cloudstorage.js#L25
    //originally by : @slushia

    let engine = fs.readFileSync(
      path.join(__dirname, "../lobby/DefaultEngine.ini")
    );
    let runtime = fs.readFileSync(
      path.join(__dirname, "../lobby/DefaultRuntimeOptions.ini")
    );
    let game = fs.readFileSync(
      path.join(__dirname, "../lobby/DefaultGame.ini")
    );
    res.json([
      {
        uniqueFilename: "3460cbe1c57d4a838ace32951a4d7171",
        filename: "DefaultEngine.ini",
        hash: crypto.createHash("sha1").update(engine).digest("hex"),
        hash256: crypto.createHash("sha256").update(engine).digest("hex"),
        length: engine.length,
        contentType: "application/octet-stream",
        uploaded: fs.statSync(
          path.join(__dirname, "../lobby/DefaultEngine.ini")
        ).mtime,
        storageType: "S3",
        doNotCache: false,
      },
      {
        uniqueFilename: "DefaultGame.ini",
        filename: "DefaultGame.ini",
        hash: crypto.createHash("sha1").update(game).digest("hex"),
        hash256: crypto.createHash("sha256").update(game).digest("hex"),
        length: game.length,
        contentType: "application/octet-stream",
        uploaded: fs.statSync(
          path.join(__dirname, "../lobby/DefaultGame.ini")
        ).mtime,
        storageType: "S3",
        doNotCache: false,
      },
      {
        uniqueFilename: "c52c1f9246eb48ce9dade87be5a66f29",
        filename: "DefaultRuntimeOptions.ini",
        hash: crypto.createHash("sha1").update(runtime).digest("hex"),
        hash256: crypto.createHash("sha256").update(runtime).digest("hex"),
        length: runtime.length,
        contentType: "application/octet-stream",
        uploaded: fs.statSync(
          path.join(__dirname, "../lobby/DefaultRuntimeOptions.ini")
        ).mtime,
        storageType: "S3",
        doNotCache: false,
      },
    ]);
  });

  //cba adding more
  app.get(
    "/fortnite/api/cloudstorage/system/3460cbe1c57d4a838ace32951a4d7171",
    (req, res) => {
      res.setHeader("content-type", "application/octet-stream");
      res.sendFile(path.join(__dirname, "../lobby/DefaultEngine.ini"));
    }
  );

  app.get(
    "/fortnite/api/cloudstorage/system/c52c1f9246eb48ce9dade87be5a66f29",
    (req, res) => {
      res.setHeader("content-type", "application/octet-stream");
      res.sendFile(
        path.join(__dirname, "../lobby/DefaultRuntimeOptions.ini")
      );
    }
  );

  app.get("/fortnite/api/cloudstorage/system/DefaultGame.ini", (req, res) => {
    res.setHeader("content-type", "application/octet-stream");
    res.sendFile(path.join(__dirname, "../lobby/DefaultGame.ini"));
  });

  app.get("/fortnite/api/cloudstorage/user/:accountId", (req, res) => {
    res.json([]);
  });
  app.get(
    "/fortnite/api/cloudstorage/user/:accountId/:fileName",
    (req, res) => {
      res.status(204).send();
    }
  );
  app.put(
    "/fortnite/api/cloudstorage/user/:accountId/:fileName",
    (req, res) => {
      res.status(204).send();
    }
  );

  //END

  //keychain
  app.get("/fortnite/api/storefront/v2/keychain", (req, res) => {
    axios
      .get("https://api.nitestats.com/v1/epic/keychain", { timeout: 3000 })
      .then((response) => {
        res.json(response.data);
      })
      .catch((e) => {
        res.json([
          "74AF07F9A2908BB2C32C9B07BC998560:V0Oqo/JGdPq3K1fX3JQRzwjCQMK7bV4QoyqQQFsIf0k=:Glider_ID_158_Hairy",
        ]);
      });
  });

  //find player by ID
  app.get("/fortnite/api/matchmaking/session/findPlayer/:id", (req, res) => {
    res.json([]);
  });

  //token
  app.get("fortnite/api/statsv2/account/:accountId", (req, res) => {
    //todo
    res.json([]);
  });
};

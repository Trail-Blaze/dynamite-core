/*
fortnite-api.js - Does some magic UwUs to Fortnite 
Copyright (C) 2021  Immanuel Garcia, John Mcdowall
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see http://www.gnu.org/licenses/old-licenses/gpl-2.0.html.
*/

const axios = require("axios");
const path = require("path");
const crypto = require("crypto");
const fs = require("fs");
const hotfixPath = path.join(__dirname, "../lobby/");
module.exports = (app) => {
   // https://stackoverflow.com/a/41577226/10976415
   // async
   function replaceContents(file, replacement, callback) {
      fs.readFile(replacement, (err, contents) => {
         if (err) return callback(err);
         fs.writeFile(file, contents, callback);
      });
   }

   // sync - not recommended

   function replaceContentsSync(file, replacement) {
      var contents = fs.readFileSync(replacement);
      fs.writeFileSync(file, contents);
   }

   //STUFF I STOLE FROM NEONITE

   app.get("/fortnite/api/cloudstorage/system/config", (req, res) => {
      res.json(require("../lobby/systemConfig.json"));
   });

   //cloudstorage
   app.get("/fortnite/api/cloudstorage/system", async (req, res) => {
      //inspiration: https://github.com/AlexDev404/AuroraFN-Backend/blob/3db03fa403387b7e829304e947f6e24fe9c3fa6c/routes/services/cloudstorage.js#L25
      //originally by : @slushia

      let engine = fs.readFileSync(path.join(hotfixPath, "DefaultEngine.ini"));
      let runtime = fs.readFileSync(
         path.join(hotfixPath, "DefaultRuntimeOptions.ini")
      );
      let game = fs.readFileSync(path.join(hotfixPath, "DefaultGame.ini"));
      res.json([
         {
            uniqueFilename: "DefaultEngine.ini",
            filename: "DefaultEngine.ini",
            hash: crypto.createHash("sha1").update(engine).digest("hex"),
            hash256: crypto.createHash("sha256").update(engine).digest("hex"),
            length: engine.length,
            contentType: "application/octet-stream",
            uploaded: fs.statSync(path.join(hotfixPath, "DefaultEngine.ini")).mtime,
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
            uploaded: fs.statSync(path.join(hotfixPath, "DefaultGame.ini"))
               .mtime,
            storageType: "S3",
            doNotCache: false,
         },

         {
            uniqueFilename: "DefaultRuntimeOptions.ini",
            filename: "DefaultRuntimeOptions.ini",
            hash: crypto.createHash("sha1").update(runtime).digest("hex"),
            hash256: crypto.createHash("sha256").update(runtime).digest("hex"),
            length: runtime.length,
            contentType: "application/octet-stream",
            uploaded: fs.statSync(
               path.join(hotfixPath, "DefaultRuntimeOptions.ini")
            ).mtime,
            storageType: "S3",
            doNotCache: false,
         },
      ]);
   });

   app.get("/fortnite/api/cloudstorage/system/:filename", (req, res) => {
      const fileName = req.params.filename;
      const filePath = path.join(hotfixPath, fileName);

      if (fs.existsSync(filePath)) {
         res.setHeader("content-type", "application/octet-stream");
         res.sendFile(filePath);
         return;
      } else {
         res.status(404).end();
         return;
      }
   });

   app.get("/fortnite/api/cloudstorage/user/:accountId", (req, res) => {
      let settings = fs.readFileSync(path.join(hotfixPath, "settings.bin"));

      res.json([
         {
            uniqueFilename: "settings.bin",
            filename: "settings.bin",
            hash: crypto.createHash("sha1").update(settings).digest("hex"),
            hash256: crypto.createHash("sha256").update(settings).digest("hex"),
            length: settings.length,
            contentType: "application/octet-stream",
            uploaded: fs.statSync(path.join(hotfixPath, "settings.bin")).mtime,
            storageType: "S3",
            doNotCache: false,
         },
      ]);
   });

   app.get(
      "/fortnite/api/cloudstorage/user/:accountId/:fileName",
      (req, res) => {
         res.setHeader("content-type", "application/octet-stream");
         res.sendFile(path.join(hotfixPath, req.params.fileName));
      }
   );

   app.put(
      "/fortnite/api/cloudstorage/user/:accountId/:fileName",
      (req, res) => {
         replaceContents(
            req.body,
            path.join(hotfixPath, req.params.fileName),
            (err) => {
               console.log(
                  "[Fortnite] Transmitting Client Settings to Server...Downloading.."
               );
               if (err) {
                  // handle errors here
                  throw err;
               }
               console.log("[Blaze] Operation Completed Successfully.");
            }
         );
      }
   );

   //END
  
      app.get("/fortnite/api/storeaccess/v1/request_access/", (req, res) => {
      res.status(204).end()
   });



   app.get("/api/v1/Fortnite/get", (req, res) => {
      res.status(204).send();
   });


/*

"/fortnite/api/cloudstorage/system/3460callbacke1c57d4a838ace32951a4d7171" - DefaultEngine.ini

"/fortnite/api/cloudstorage/system/a22d837b6a2b46349421259c0a5411bf" - DefaultGame.ini

"/fortnite/api/cloudstorage/system/mhl5jvb7fm85e157u49k1lbf8p9kpj50" - DefaultInput.ini

"/fortnite/api/cloudstorage/system/c52c1f9246eb48ce9dade87be5a66f29" - DefaultRuntimeOptions.ini
*/
   
   //token
   app.get("/fortnite/api/statsv2/account/:accountId", (req, res) => {
      //todo
      res.json([]);
   });

   //receipt for Epic Games purchase
   app.get(
      "/fortnite/api/receipts/v1/account/:accountId/receipts",
      (req, res) => {
         res.json([]);
      }
   );

   //version check
   app.get("/fortnite/api/v2/versioncheck/:version", (req, res) => {
      res.json({ "type": "NO_UPDATE" });
   });

   // Gold Bar
   app.get(
      "/fortnite/api/game/v2/br-inventory/account/:accountId",
      (req, res) => {
         res.json({ stash: { globalcash: 100 } });
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

   app.get("/links/api/fn/mnemonic/:playlist", (req, res) =>
      res.json({
         namespace: "fn",
         accountId: "epic",
         creatorName: "Epic",
         mnemonic: req.params.playlist,
         linkType: "BR:Playlist",
         metadata: {
            matchmaking: {
               override_playlist: req.params.playlist,
            },
         },
         version: 93,
         active: true,
         disabled: false,
         created: "2021-08-16T16:43:18.268Z",
         published: "2021-08-03T15:27:17.540Z",
         descriptionTags: [],
      })
   );
   app.post(
      "/fortnite/api/game/v2/creative/discovery/surface/:accountId",
      (req, res) => {
         res.json(require("../lib/creativeDiscovery.json"));
      });
   app.post(
      "/fortnite/api/game/v2/profileToken/verify/:accountId",
      (req, res) => {
         res.status(204).end();
      }
   );
}; // END MODULE

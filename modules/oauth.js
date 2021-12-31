/*
oauth.js - Handles authentication for the server
Copyright (C) 2021  Immanuel Garcia
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

const crypto = require("crypto");
const fs = require("fs");
const Profile = require("../lib/profile");
let thisUser;

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = (app) => {
   //exchange (egl2)
   app.get("/account/api/oauth/exchange", function (req, res) {
      res.json({
         expiresInSeconds: 99, // Expires in 1 minute, 39 seconds
         code: crypto.randomBytes(15).toString("hex"),
         creatingdeviceId: "clidynamite43obprerelease",
      });
   });

    //token
   app.post("/account/api/oauth/token", async (req, res) => {
  res.json({
    "access_token": "trailblaze",
    "expires_in": 28800,
    "expires_at": "9999-12-02T01:12:01.100Z",
    "token_type": "bearer",
    "refresh_token": "trailblaze",
    "refresh_expires": 86400,
    "refresh_expires_at": "9999-12-02T01:12:01.100Z",
    "account_id": req.body.username || "BlazeUser",
    "client_id": "trailblaze",
    "internal_client": true,
    "client_service": "fortnite",
    "displayName": req.body.username || "BlazeUser",
    "app": "fortnite",
    "in_app_id": req.body.username || "BlazeUser",
    "device_id": "trailblaze"
  });
});

// Verification
app.get("/account/api/oauth/verify", (req, res) => {
	res.status(204).end()
})
   
   //sign out
   app.delete("/account/api/oauth/sessions/kill", (req, res) => {
      res.status(204).end();
   });
   app.delete("/account/api/oauth/sessions/kill/:token", (req, res) => {
      delete global[req.params.token];
      res.status(204).end();
   });
   //account info
   app.get("/account/api/public/account/:accountId", (req, res) => {
      var displayname = `${req.params.accountId}`;
      if (displayname.endsWith("="))
         displayname = Buffer.from(req.params.accountId, "base64").toString();
      res.json({
         id: req.params.accountId,
         displayName: displayname,
         externalAuths: {},
      });
   });
   app.get("/account/api/public/account/", (req, res) => {
      res.json([
         {
            id: req.query.accountId,
            displayName: req.query.accountId,
            externalAuths: {},
         },
      ]);
   });
   // device auth
   app.get("/account/api/public/account/:accountId/deviceAuth", (req, res) =>
      res.json([])
   );
   app.post("/account/api/public/account/:accountId/deviceAuth", (req, res) =>
      res.json({
         accountId: req.params.accountId,
         deviceId: "devdynamite43Express",
         secret: "FuckKemo",
      })
   );
};

/*
account-api.js
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

module.exports = (app) => {
   //external auth
   app.get(
      "/account/api/public/account/:accountId/externalAuths",
      (req, res) => {
         res.json([]);
      }
   );

   // Public Account Details
   app.get("/account/api/public/account/:accountId", async (req, res) => {
      res.json({
         id: req.params.accountId,
         displayName: req.params.accountId,
         name: "Blaze",
         email: req.params.accountId + "@blaze.net",
         failedLoginAttempts: 0,
         lastLogin: new Date().toISOString(),
         numberOfDisplayNameChanges: 0,
         ageGroup: "undefined",
         headless: false,
         country: "US",
         lastName: "_User145",
         preferredLanguage: "en",
         canUpdateDisplayName: false,
         tfaEnabled: false,
         emailVerified: true,
         minorVerified: false,
         minorExpected: false,
         minorStatus: "NotAMinor",
      });
   });

   app.post("/api/v1/user/setting", (req, res) => {
      res.json([
         {
            accountId: req.body.accountId,
            key: "avatar",
            value: "cid_005_athena_commando_m_default", // CHARACTER ID #005, STW_ATHENA COMMANDO MALE DEFAULT ~ Jonesy Character Male Default

            // "VALUE" COULD BE ANYTHING REALLY (WITHIN SCOPE OF SKIN ID, BUT LET'S JUST USE THIS AS DEFAULT)
            // SEE
            // https://docs.google.com/spreadsheets/d/1gVDgnzNyMCafIWa-dBO3mgNUHmHzgA9O5sWbfQy2Yfg/edit#gid=0
            // FOR A LIST OF VALID IDS
         },
         {
            accountId: req.body.accountId,
            key: "avatarBackground",
            value: '["#FFA812","#C9850E","#614109"]', // GRADIENT OF BRIGHT ORANGE TO DARK ORANGE
         },
         {
            accountId: req.body.accountId,
            key: "appInstalled",
            value: "init",
         },
      ]);
   });
};

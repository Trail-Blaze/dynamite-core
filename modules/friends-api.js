/*
friends-api.js - Allows the viewing of friends in Fortnite
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


// Recent Users
  app.get("/friends/api/v1/*/recent/fortnite", (req, res) => {
    res.json([]);    
});
  
  
  
}; // END MODULE EXPORT

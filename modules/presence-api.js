/*
presence-api.js - Handles user presence
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
  // Game presence. Return NULL Array for everything
  app.all('/presence/api/v1/*', (req, res) => { 
    res.json([]); 
  })
  
  /*
  app.get(
    "/presence/api/v1/_/:accountId/settings/subscriptions",
    (req, res) => {
      res.status(204).end();
    }
  );
  */
  
  // PRESENCE_API_MODULE_END
};  

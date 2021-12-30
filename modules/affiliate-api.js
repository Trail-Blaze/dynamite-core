/*
affiliate-api.js
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
  
//affiliate api (recoded by slushy#0001)
  app.get("/affiliate/api/public/affiliates/slug/:slug", async (req, res) => {
    const SAC = require("../lib/SAC.json");
    SAC.forEach(code => {
        if (req.params.slug.toLowerCase() == code.toLowerCase()) {
            return res.json({
                "id": code,
                "slug": code,
                "displayName": code,
                "status": "ACTIVE",
                "verified": false
            });
        }
    })
    res.json({});
})
};

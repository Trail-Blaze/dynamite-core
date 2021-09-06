/*
favicon-router.js - Sends Favicon file to client if requested
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

const path = require("path");

module.exports = (app) => {
  //Send Favicon icon file if requested
  app.get("/favicon.ico", (req, res) => {    
    res.sendFile(path.join(__dirname, "../lib/favicon.ico"));
  
  });
}

/*
shop.js - Grabs shop listings in Fortnite
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

const axios = require("axios");

module.exports = (app) => {
	//app.get('/fortnite/api/storefront/v2/catalog', function (req, res) {
     //   res.json(require("../lib/shop.json"));
	//});
	
	app.get("/catalog/api/shared/bulk/offers", function (req, res) { 
		res.json({}); 
	});
	
} // END MODULE EXPORTS

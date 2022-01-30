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
   app.get("/region", (req, res) => {
    res.send({
        "continent": {
            "code": "EU",
            "geoname_id": 6255148,
            "names": {
                "de": "Europa",
                "en": "Europe",
                "es": "Europa",
                "fr": "Europe",
                "ja": "\u30e8\u30fc\u30ed\u30c3\u30d1",
                "pt-BR": "Europa",
                "ru": "\u0415\u0432\u0440\u043e\u043f\u0430",
                "zh-CN": "\u6b27\u6d32"
            }
        },
        "country": {
            "geoname_id": 2635167,
            "is_in_european_union": false,
            "iso_code": "GB",
            "names": {
                "de": "UK",
                "en": "United Kingdom",
                "es": "RU",
                "fr": "Royaume Uni",
                "ja": "\u82f1\u56fd",
                "pt-BR": "Reino Unido",
                "ru": "\u0411\u0440\u0438\u0442\u0430\u043d\u0438\u044f",
                "zh-CN": "\u82f1\u56fd"
            }
        },
        "subdivisions": [
            {
                "geoname_id": 6269131,
                "iso_code": "ENG",
                "names": {
                    "de": "England",
                    "en": "England",
                    "es": "Inglaterra",
                    "fr": "Angleterre",
                    "ja": "\u30a4\u30f3\u30b0\u30e9\u30f3\u30c9",
                    "pt-BR": "Inglaterra",
                    "ru": "\u0410\u043d\u0433\u043b\u0438\u044f",
                    "zh-CN": "\u82f1\u683c\u5170"
                }
            },
            {
                "geoname_id": 3333178,
                "iso_code": "NGM",
                "names": {
                    "en": "Nottingham",
                    "ja": "\u30ce\u30c3\u30c6\u30a3\u30f3\u30ac\u30e0",
                    "ru": "\u041d\u043e\u0442\u0442\u0438\u043d\u0433\u0435\u043c",
                    "zh-CN": "\u8bfa\u4e01\u6c49"
                }
            }
        ]
    })
});
}
var date = new Date();

module.exports = (app) => {
    app.get("/content/api/pages/fortnite-game/media-events", (req, res) => {
		res.json({ "jcr:isCheckedOut": true, "mediaEvents": { "_type": "Fortnite - Media Event List" }, "_title": "media-events", "_noIndex": false, "jcr:baseVersion": "a7ca237317f1e721b1c50b-f7e1-48b0-bc1b-733ef38709c0", "_activeDate": "2022-01-12T01:43:01.626Z", "lastModified": "2022-01-24T17:15:41.040Z", "_locale": "en-US", "_suggestedPrefetch": [] })
        res.status(200)
		res.end()
	})
    app.get(["/content/api/pages/fortnite-game", "/content/api/pages/"], (req, res) => {
        res.json({
            _title: 'Fortnite Game',
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: 'en-US',
            battleroyalenews: {
                news: {
                    motds: [
                        {
                            entryType: "Website",
                            image: "https://cdn.discordapp.com/attachments/812490513537040435/834117700934172673/stock_fn1.jpg",
                            tileImage: "https://cdn.discordapp.com/attachments/812490513537040435/834117187903422535/banner0.jpg",
                            hidden: false,
                            tabTitleOverride: "Blaze",
                            _type: "CommonUI Simple Message MOTD",
                            title: "Welcome To Blaze",
                            body: "Private Testing Build 1.42.6",
                            videoStreamingEnabled: false,
                            sortingPriority: 20,
                            id: "blaze-splashscreen",
                            videoFullscreen: false,
                            spotlight: false,
                            websiteURL: "https://trail-blaze.github.io",
                            websiteButtonText: "Visit Website"
                        }
                    ]
                },
                "jcr:isCheckedOut": true,
                _title: "battleroyalenews",
                header: "",
                style: "None",
                _noIndex: false,
                alwaysShow: false,
                "jcr:baseVersion": "a7ca237317f1e74e4b8154-226a-4450-a3cd-c77af841e798",
                _activeDate: date.toISOString(),
                lastModified: date,
                _locale: "en-US"
            },
            emergencynotice: {
                news: {
                    platform_messages: [],
                    _type: 'Battle Royale News',
                    messages: [
                        {
                            hidden: false,
                            _type: 'CommonUI Simple Message Base',
                            subgame: 'br',
                            title: "Blaze",
                            body: "Private Testing Build",
                            spotlight: true
                        }
                    ]
                },
                _title: 'emergencynotice',
                _activeDate: date.toISOString(),
                lastModified: date,
                _locale: 'en-US'
            }
        })
    })
}

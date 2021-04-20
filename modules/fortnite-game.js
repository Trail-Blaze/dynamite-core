var date = new Date();

module.exports = (app) => {
    app.get("/content/api/pages/fortnite-game", (req, res) => {
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
                            body: "Private Testing Build 1.31.8",
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
                _activeDate: date.toISOString();,
                lastModified: date,
                _locale: 'en-US'
            }
        })
    })
}

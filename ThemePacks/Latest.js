module.exports = (app, port) => {
    app.get("/content/api/pages/fortnite-game", (req, res) => {
        res.json({
            "jcr:isCheckedOut": true,
            "_title": "Fortnite Game",
            "jcr:baseVersion": "a7ca237317f1e7b00bc82e-d9a2-4f0d-b951-704d295cd1aa",
            "_activeDate": "2017-07-24T22:24:02.300Z",
            "lastModified": "2020-11-01T17:36:19.024Z",
            "_locale": "en-US",
            "emergencynotice": {
                "news": {
                    "platform_messages": [],
                    "_type": "Battle Royale News",
                    "messages": [{
                        "hidden": false,
                        "_type": "CommonUI Simple Message Base",
                        "subgame": "br",
                        "body": "Make Sure to Check Out Our Discord!",
                        "title": "Blaze",
                        "spotlight": false
                    }, 
                    ],
                },
                "jcr:isCheckedOut": true,
                "_title": "emergencynotice",
                "_noIndex": false,
                "alwaysShow": true,
                "jcr:baseVersion": "a7ca237317f1e761d4ee60-7c40-45a8-aa3e-bb0a2ffa9bb5",
                "_activeDate": "2018-08-06T19:00:26.217Z",
                "lastModified": "2020-10-30T04:50:59.198Z",
                "_locale": "en-US"
            },
            "athenamessage": {
                "_title": "athenamessage",
                "overrideablemessage": {
                    "_type": "CommonUI Simple Message",
                    "message": {
                        "_type": "CommonUI Simple Message Base",
                        "title": "Blaze",
                        "body": "If you have any bugs, you can join our Discord! Link is in GitHub."
                    }
                },
                "_activeDate": "2017-08-30T03:08:31.687Z",
                "lastModified": "2017-09-26T16:20:19.191Z",
                "_locale": "en-US"
            },
            "savetheworldnews": {
                "news": {
                    "_type": "Battle Royale News",
                    "messages": [{
                        "image": `https://trail-blaze.github.io/res/Blaze/tbico.svg`,
                        "hidden": false,
                        "_type": "CommonUI Simple Message Base",
                        "adspace": "Blaze",
                        "title": "Blaze",
                        "body": "Make Sure to Check Out Our Discord!",
                        "spotlight": false
                    }]
                },
                "jcr:isCheckedOut": true,
                "_title": "SaveTheWorldNews",
                "_noIndex": false,
                "alwaysShow": true,
                "jcr:baseVersion": "a7ca237317f1e79a6efa59-3f42-4a68-a8c7-cb2e21ec462c",
                "_activeDate": "2020-01-22T00:00:00.000Z",
                "lastModified": "2020-09-25T16:41:01.892Z",
                "_locale": "en-US"
            },
            "loginmessage": {
                "_title": "Message de connexion",
                "loginmessage": {
                    "_type": "CommonUI Simple Message",
                    "message": {
                        "_type": "CommonUI Simple Message Base",
                        "title": "Blaze",
                        "body": "Make Sure to Check Out Our Discord!"
                    }
                },
                "_activeDate": "2017-07-19T13:14:04.490Z",
                "lastModified": "2018-03-15T07:10:53.113Z",
                "_locale": "en-US"
            },
            "shopSections": {
                "jcr:isCheckedOut": true,
                "_title": "shop-sections",
                "sectionList": {
                    "_type": "ShopSectionList",
                    "sections": [{
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 70,
                        "sectionId": "Featured",
                        "bShowTimer": true,
                        "sectionDisplayName": "Featured",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 69,
                        "sectionId": "Featured2",
                        "bShowTimer": false,
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "CustomizeHero",
                        "bShowTimer": true,
                        "sectionDisplayName": "Customize Your Hero!",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 64,
                        "sectionId": "HeroGear",
                        "bShowTimer": true,
                        "sectionDisplayName": "Hero Gear",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": false,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "BannerBrigade",
                        "bShowTimer": true,
                        "sectionDisplayName": "Banner Brigade",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 64,
                        "sectionId": "BannerGear",
                        "bShowTimer": true,
                        "sectionDisplayName": "Banner Gear",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 60,
                        "sectionId": "Daily",
                        "bShowTimer": true,
                        "sectionDisplayName": "Daily",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 59,
                        "sectionId": "Daily2",
                        "bShowTimer": true,
                        "sectionDisplayName": "",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 60,
                        "sectionId": "Special",
                        "bShowTimer": true,
                        "sectionDisplayName": "Special Offers",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 59,
                        "sectionId": "Special2",
                        "bShowTimer": true,
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "StarWars",
                        "bShowTimer": true,
                        "sectionDisplayName": "Star Wars",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "StartParty",
                        "bShowTimer": true,
                        "sectionDisplayName": "Start the Party!",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 64,
                        "sectionId": "PartyGear",
                        "bShowTimer": true,
                        "sectionDisplayName": "Party Gear",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 64,
                        "sectionId": "TurnMusicUp",
                        "bShowTimer": true,
                        "sectionDisplayName": "Turn the Music Up!",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 30,
                        "sectionId": "SpookyOffers",
                        "bShowTimer": true,
                        "sectionDisplayName": "Spooky Offers",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 29,
                        "sectionId": "SpookyOffers2",
                        "bShowTimer": true,
                        "sectionDisplayName": "",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "Fortnitemares",
                        "bShowTimer": true,
                        "sectionDisplayName": "Fortnitemares",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 65,
                        "sectionId": "Ghostbusters",
                        "bShowTimer": true,
                        "sectionDisplayName": "Ghostbusters",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 64,
                        "sectionId": "GhostbustersGear",
                        "bShowTimer": true,
                        "sectionDisplayName": "Ghostbusters Gear",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 40,
                        "sectionId": "Marvel",
                        "bShowTimer": true,
                        "sectionDisplayName": "Marvel",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 39,
                        "sectionId": "Marvel2",
                        "bShowTimer": true,
                        "sectionDisplayName": "",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 38,
                        "sectionId": "Marvel3",
                        "bShowTimer": true,
                        "sectionDisplayName": "",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "_type": "DynamicBackground"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 37,
                        "sectionId": "Marvel4",
                        "bShowTimer": true,
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "Bundles",
                        "bShowTimer": true,
                        "sectionDisplayName": "Bundles",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "Characters",
                        "bShowTimer": true,
                        "sectionDisplayName": "Outfits",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "Backpacks",
                        "bShowTimer": true,
                        "sectionDisplayName": "Back Blings",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 0,
                        "sectionId": "Pickaxes",
                        "bShowTimer": true,
                        "sectionDisplayName": "Harvesting Tools",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "Gliders",
                        "bShowTimer": true,
                        "sectionDisplayName": "Gliders",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "MusicPacks",
                        "bShowTimer": true,
                        "sectionDisplayName": "Music Packs",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "sectionId": "Wraps",
                        "bShowTimer": true,
                        "sectionDisplayName": "Wraps",
                        "bShowIneligibleOffers": true
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": true,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 80,
                        "sectionId": "LimitedTime",
                        "bShowTimer": false,
                        "sectionDisplayName": "Limited Time",
                        "bShowIneligibleOffers": false
                    }, {
                        "bSortOffersByOwnership": false,
                        "bShowIneligibleOffersIfGiftable": false,
                        "bEnableToastNotification": false,
                        "background": {
                            "stage": "default",
                            "_type": "DynamicBackground",
                            "key": "vault"
                        },
                        "_type": "ShopSection",
                        "landingPriority": 90,
                        "sectionId": "Battlepass",
                        "bShowTimer": false,
                        "sectionDisplayName": "Battle Pass",
                        "bShowIneligibleOffers": true
                    }]
                },
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e77f7abaac-2b4d-4df8-828b-6056a1904470",
                "_activeDate": "2020-10-28T00:00:00.000Z",
                "lastModified": "2020-11-02T15:56:44.648Z",
                "_locale": "en-US"
            },
            "battleroyalenewsv2": {
                "news": {
                    "motds": [{
                        "entryType": "Website",
                        "image": `https://trail-blaze.github.io/res/Blaze/tbico.svg`,
                        "tileImage": `https://trail-blaze.github.io/res/Blaze/tbico.svg`,
                        "videoMute": false,
                        "hidden": false,
                        "tabTitleOverride": "Blaze",
                        "_type": "CommonUI Simple Message MOTD",
                        "title": "Blaze",
                        "body": "Make Sure to Check Out Our Discord!",
                        "videoLoop": false,
                        "videoStreamingEnabled": false,
                        "sortingPriority": 80,
                        "id": "BlazeNewsBR",
                        "videoAutoplay": false,
                        "videoFullscreen": false,
                        "spotlight": false,
                        "websiteURL": "https://discord.gg/zgUFzTFf2Y",
                        "websiteButtonText" : "Join our discord"
                    }
                ],
                },
                "jcr:isCheckedOut": true,
                "_title": "battleroyalenewsv2",
                "header": "",
                "style": "None",
                "_noIndex": false,
                "alwaysShow": false,
                "jcr:baseVersion": "a7ca237317f1e704b1a186-6846-4eaa-a542-c2c8ca7e7f29",
                "_activeDate": "2020-01-21T14:00:00.000Z",
                "lastModified": "2020-11-01T17:36:19.024Z",
                "_locale": "en-US"
            },
            "Creativenewsv2": {
                "news": {
                    "motds": [{
                        "entryType": "Website",
                        "image": `https://trail-blaze.github.io/res/Blaze/tbico.svg`,
                        "tileImage": `https://trail-blaze.github.io/res/Blaze/tbico.svg`,
                        "videoMute": false,
                        "hidden": false,
                        "tabTitleOverride": "Blaze",
                        "_type": "CommonUI Simple Message MOTD",
                        "title": "Blaze",
                        "body": "Make Sure to Check Out Our Discord!",
                        "videoLoop": false,
                        "videoStreamingEnabled": false,
                        "sortingPriority": 80,
                        "id": "BlazeNews",
                        "videoAutoplay": false,
                        "videoFullscreen": false,
                        "spotlight": false,
                        "websiteURL": "https://discord.gg/zgUFzTFf2Y",
                        "websiteButtonText" : "Join our discord"
                    }
                ],
                },
                "jcr:isCheckedOut": true,
                "_title": "Creativenewsv2",
                "header": "",
                "style": "None",
                "_noIndex": false,
                "alwaysShow": false,
                "jcr:baseVersion": "a7ca237317f1e704b1a186-6846-4eaa-a542-c2c8ca7e7f29",
                "_activeDate": "2020-01-21T14:00:00.000Z",
                "lastModified": "2020-11-01T17:36:19.024Z",
                "_locale": "en-US"
            },
            "shopCarousel": {
                "jcr:isCheckedOut": true,
                "itemsList": {
                    "_type": "ShopCarouselItemList",
                    "items": [{
                        "tileImage": `https://trail-blaze.github.io/res/Blaze/tbico.svg`,
                        "fullTitle": "Blaze",
                        "hidden": false,
                        "_type": "ShopCarouselItem",
                        "landingPriority": 100,
                        "action": "ShowOfferDetails",
                        "offerId": "v2:/cc29bec6d0bdd2876fb412cf674a7960003bbb76b2eb9b930833a61b604a3b4e",
                        "title": "Blaze"
                    }]
                },
                "_title": "shop-carousel",
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e76d4c1405-e84c-4ece-bc50-7112ba557b33",
                "_activeDate": "2020-09-25T12:00:00.000Z",
                "lastModified": "2020-10-26T15:37:05.775Z",
                "_locale": "en-US"
            },
            "_suggestedPrefetch": []
        })
    })
}

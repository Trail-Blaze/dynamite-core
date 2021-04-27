module.exports = (app) => {
    //check server status
    app.get('/lightswitch/api/service/bulk/status', (req, res) => {
        res.json([{
            "serviceInstanceId": "fortnite",
            "status": "UP",
            "message": "200 OK",
            "maintenanceUri": null,
            "allowedActions": ["PLAY", "DOWNLOAD"],
            "banned": false
        }]);
    });
  
  
    //version check
    app.get('/fortnite/api/v2/versioncheck/:version', (req, res) => {
        res.json({"type": "NO_UPDATE"})
	});
    //external auth
    app.get('/account/api/public/account/:accountId/externalAuths', (req, res) => {
        res.json([])
	});
  
  
    //waiting room returns with not content
    app.get('/waitingroom/api/waitingroom', (req, res) => {
        res.status(204).end();
    });
  
  //privacy
    app.get('/fortnite/api/game/v2/privacy/account/:accountId', (req, res) => {
        res.json({
            "accountId": req.params.accountId,
            "optOutOfPublicLeaderboards": false
        })
    });

    //enabled features
    app.get('/fortnite/api/game/v2/enabled_features', (req, res) => {
        res.json([])
    });

  
    //grant access
    app.post('/fortnite/api/game/v2/grant_access/:accountId', (req, res) => {
        res.status(204).end();
    });

    //receipt for Epic Games purchase
  app.get('/fortnite/api/receipts/v1/account/:accountId/receipts', (req, res) => {
		res.json([])
    });

	//blocked people list
	app.get('/friends/api/public/blocklist/:accountId', (req, res) => {
		res.json({
			blockedUsers: []
		})
    });

	//setting for account
	app.get('/friends/api/v1/:accountId/settings', (req, res) =>  {
		res.json({
			acceptInvites: "public"
		})
    });

	//recent players interacted with
	app.get('/friends/api/public/list/fortnite/:accountId/recentPlayers', (req, res) => {
		res.json([]);
    });

	//friends list
	app.get('/friends/api/public/friends/:accountId', (req, res) =>  {
		res.json([]);
    });

    //data router
	app.post('/datarouter/api/v1/public/*', (req, res) => {
		res.status(204).end();
    });

    //game presence
	app.get('/presence/api/v1/_/:accountId/settings/subscriptions', (req, res) => { res.status(204).end(); });
	app.get('/party/api/v1/Fortnite/user/:accountId/notifications/undelivered/count', (req, res) => { res.status(204).end(); });

	app.get('/socialban/api/public/v1/:accountId', (req, res) => {
		res.status(204).end();
	});

    app.get('/content-controls/:accountId', function (req, res) {
		res.status(204).end();
	});

	//platform
	app.post('/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId', (req, res) => {
		res.set('Content-Type', 'text/plain');
		res.send(true);
	});

    //slug and whatnot
    app.get('/affiliate/api/public/affiliates/slug/:affiliateName', (req, res) => {
		res.json({
			id: "aabbccddeeff11223344556677889900",
			slug: req.params.affiliateName,
			displayName: req.params.affiliateName,
		    status: "ACTIVE",
			verified: true
		})
	});

	//cloudstorage
	//cloudstorage for matchmaking support
	app.get('/fortnite/api/cloudstorage/system', (req, res) => {
		res.json([])
	});
	app.get('/fortnite/api/cloudstorage/user/:accountId', (req, res) => {
		res.json([])
	});
	app.get('/fortnite/api/cloudstorage/user/:accountId/:fileName', (req, res) => {
		res.set('Content-Type', 'application/octet-stream').send("")
	});
	app.put('/fortnite/api/cloudstorage/user/:accountId/:fileName', (req, res) => {
		res.status(204).end();
    });

	//keychain
	app.get('/fortnite/api/storefront/v2/keychain', (req, res) => { res.json(["A93064DA8BDA456CADD2CD316BE64EE5:nziBPQTfuEl4IRK6pOaovQpqQC6nsMQZFTx+DEg62q4=:EID_BLANK"]); });

    //party
    app.get('/party/api/v1/Fortnite/user/:accountId', (req, res) => {
		res.json({
			current: [],
			pending: [],
			invites: [],
			pings: []
		});
	});

	//find player by ID
	app.get("/fortnite/api/matchmaking/session/findPlayer/:id", (req, res) => {
		res.json([])
	})
	
	//token
	app.get("fortnite/api/statsv2/account/:accountId", (req, res) => {
		//todo
		res.json([])
	})
}



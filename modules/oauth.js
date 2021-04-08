const crypto = require('crypto');

module.exports = (app) => {
    app.post('/account/api/oauth/token', (req, res, next) => {
        userName = ""
        accId = ""
        if (req.body.username) userName = req.body.username.split("@")[0]
        else if (req.body.email) userName = req.body.email.split("@")[0]
        // Invalid User
        else userName = 'BlazeUser';
        res.json({
            acesss_token: crypto.randomBytes(15).toString(hex),
            expires_in: 1000000000,
            expires_at: "9999-12-31T23:59:59.999Z",
            token_type: "bearer",
            account_id: userName + "BlazeUser", //amazing id
            client_id: "ec684b8c687f479fadea3cb2ad83f5c6",
            internal_client: true,
            displayName: userName,
            app: "fortnite",
            in_app_id: userName + "BlazeUser", //amazing id
            device_id: "5dcab5dbe86a7344b061ba57cdb33c4f"
        })
    })
}

module.exports = (app) => {
	app.get('/fortnite/api/storefront/v2/catalog', function (req, res) {
		res.json(require("../lib/shop.json"));
	});
}
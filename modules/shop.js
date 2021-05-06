module.exports = (app) => {
	app.get('/fortnite/api/storefront/v2/catalog', function (req, res) {
    axios
      .get("https://api.nitestats.com/v1/epic/store")
      .then((response) => {
        res.json(response.data);
      })
      .catch((e) => {
        res.json(require("../lib/shop.json"));
      });
  });	
	});
}

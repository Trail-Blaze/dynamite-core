module.exports = (app) => {
  
//affiliate api
  app.get(
    "/affiliate/api/public/affiliates/slug/:affiliateName",
    (req, res) => {
      res.json({
        id: "aabbccddeeff11223344556677889900",
        slug: req.params.affiliateName,
        displayName: req.params.affiliateName,
        status: "ACTIVE",
        verified: true,
      });
    }
  );
};

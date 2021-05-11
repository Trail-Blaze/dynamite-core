module.exports = (app) => {
  //external auth
  app.get(
    "/helloBlaze",
    (req, res) => {
      res.send("Hello user!");
    }
  );
};

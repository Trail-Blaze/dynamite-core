module.exports = (app) => {
  //Send Favicon icon file if requested
  app.get("/favicon.ico", (req, res) => {    
    res.sendFile(path.join(__dirname, "../lib/favicon.ico"));
  
  });
}

module.exports = (app) => {
  
//check server status
  app.get("/lightswitch/api/service/bulk/status", (req, res) => {
    res.json([
      {
        serviceInstanceId: "fortnite",
        status: "UP",
        message: "200 OK",
        maintenanceUri: null,
        allowedActions: ["PLAY", "DOWNLOAD"],
        banned: false,
      },
    ]);
  });
}

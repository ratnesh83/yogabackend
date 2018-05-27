var express = require('express');
var authRoutes = require("./auth/auth-route");

module.exports = {
    mountApiRoutes:mountApiRoutes
}


function mountApiRoutes(expressApp) {
    var api = express.Router();
    
    // Binding to api router
    api.use("/auth", authRoutes);


    // Attaching api to main express app
    expressApp.use("/api", api);

}


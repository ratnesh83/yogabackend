var express = require("express"),
ctrl = require("./auth-controller");


var router = express.Router();

module.exports = router;


// Get
router.get("/getallyoga", (req, res) => ctrl.getAllYoga(req,res));

router.get("/getyoga/:id", (req, res) => ctrl.getYoga(req,res));


router.post("/addyoga", (req, res) => ctrl.addYoga(req,res));


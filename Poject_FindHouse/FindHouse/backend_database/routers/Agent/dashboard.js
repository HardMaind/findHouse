const router = require("express").Router();
const dashboardController = require("../../controllers/Agent/dashboard.controller");
router.get("/userAdmin/dashboard", dashboardController.userAdmin);
router.get("/userAdmin/AgentDetails", dashboardController.AgentDetails);

module.exports = router;

const router = require("express").Router();
const loginController = require("../controllers/login.controller");
router.get("/login", loginController.get);
router.post("/login", loginController.login);

module.exports = router;

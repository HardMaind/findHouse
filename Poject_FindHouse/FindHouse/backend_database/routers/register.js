const router = require("express").Router();
const registerController = require("../controllers/register.controller");
router.get("/register", registerController.get);
router.post("/register", registerController.sing_up);

module.exports = router;

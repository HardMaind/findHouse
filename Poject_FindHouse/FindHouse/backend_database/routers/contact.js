const router = require("express").Router();
const contactController = require("../controllers/contact.controller");
router.get("/contact", contactController.get);
router.post("/contact", contactController.save);
module.exports = router;

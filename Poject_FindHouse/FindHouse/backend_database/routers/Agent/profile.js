const router = require("express").Router();
const addpropertyController = require("../../controllers/Agent/profile.controller");

router.get("/userAdmin/profile", addpropertyController.profilePage);
router.post(
  "/userAdmin/profile",
  addpropertyController.upload.single("profileImage"),
  addpropertyController.addProfile
);
router.post(
  "/userAdmin/profile/changePassword",
  addpropertyController.changePassword
);
router.get("/userAdmin/profile/getData", addpropertyController.getProfileData);
router.get("/userAdmin/profile/agent", addpropertyController.allAgent);

module.exports = router;

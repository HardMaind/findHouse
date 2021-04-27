const router = require("express").Router();
const addpropertyController = require("../../controllers/Agent/addProperty.controller");
const authCheck = require("../../controllers/auth/authcheck.controller");
router.get(
  "/userAdmin/addproperty",
  authCheck.authCheck,
  addpropertyController.getPoperty
);
router.post(
  "/userAdmin/addproperty",
  authCheck.authCheck,
  addpropertyController.addPoperty
);
router.post(
  "/userAdmin/addproperty/location",
  authCheck.authCheck,
  addpropertyController.location
);

module.exports = router;
// $ npx sequelize model:generate --name property --attributes title:string,decripation:string,type:string,status:string,price:string,area:string,rooms:string,address:string,state:string,city:string,neighborhood:string,zip:string,country:string,areasize:string,areapreix:string,landarea:string,landareasizepostfix:string,badrooms:string,bathrooms:string,garages:string,garagessize:string,yearbuilt:string,vediourl:string,360virtualtour:string,amenities:string,images:string,attchements:string,plandecripation:string,palnbathrooms:string,planbedrooms:string,planprice:string,planimage:string,plansize:string,pricepostfix:string

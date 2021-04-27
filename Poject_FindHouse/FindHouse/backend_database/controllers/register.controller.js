const models = require("../models");
const path = require("path");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const registerData = Joi.object({
  _id: Joi.allow(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  repassword: Joi.ref("password"),
});

function sing_up(req, res) {
  models.Register.findOne({ where: { email: req.body.email } })
    .then(async (result) => {
      if (result) {
        res.status(409).json({ msg: "Emails is already exsist" });
      } else {
        if (req.body.password == req.body.repassword) {
          const password = await bcrypt.hash(req.body.password, 8);
          // const repassword = await bcrypt.hash(req.body.repassword, 8);
          const register = {
            username: req.body.username,
            email: req.body.email,
            password: password,
            usertype: req.body.usertype,
          };
          registerData.validate(register);
          models.Register.create(register)
            .then((result) => {
              res.sendFile(
                path.resolve(
                  __dirname,
                  "../../grandetest.com/theme/findhouse-html/index.html"
                )
              );
              // res.status(200).json({msg:"You are Registered"})
              console.log("You are Registered!!");
            })
            .catch((err) => {
              res.status(500).json({ error: err?.message });
            });
        } else {
          // res.json({ password: "password must be same!!" });
          console.log({ password: "password must be same!!" });
        }
      }
    })
    .catch((err) => {
      // res.status(500).json({ error: err?.message });
      console.log({ error: err?.message });
    });
}
function get(req, res) {
  res.sendFile(
    path.resolve(
      __dirname,
      "../../grandetest.com/theme/findhouse-html/index.html"
    )
  );
}
module.exports = {
  get,
  sing_up,
};

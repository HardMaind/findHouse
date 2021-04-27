const model = require("../models");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

function login(req, res) {
  const secretKey = " @!$#314318wfvow38rfgdfgxe4tds35#$%^5nh0";
  model.Register.findOne({
    where: { email: req.body.email },
  })
    .then(async (data) => {
      if (data == null) {
        console.log("Register!!");
        res.send("Register!!");
      } else {
        try {
          const matchPassword = await bcrypt.compare(
            req.body.password,
            data.password
          );
          if (!matchPassword) {
            console.log("Incorrect password");
            res.send("Incorrect password");
          } else {
            const Token = jwt.sign({ email: data.email }, secretKey, {
              expiresIn: 1200,
            });
            if (data.usertype != "Single User") {
              var email = req.body.email;
              encodeURI(email);
              res.cookie("AgentToken", Token + "email" + email, {
                expires: new Date(Date.now() + 6000000),
                httpOnly: true,
              });
            } else {
              res.cookie("singleUserToken", Token, {
                expires: new Date(Date.now() + 6000000),
                httpOnly: true,
              });
            }
            res.sendStatus(200);
          }
        } catch (error) {
          console.log(error?.message);
        }
      }
    })
    .catch((err) => {
      console.log(err);
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
  login,
};

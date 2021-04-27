const path = require("path");
const model = require("../../models");
const multer = require("multer");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const constentPath = path.resolve(
  __dirname,
  "../../../grandetest.com/theme/findhouse-html"
);

var get_cookies = function (request) {
  var cookies = {};
  request.headers &&
    request.headers.cookie.split(";").forEach(function (cookie) {
      var parts = cookie.match(/(.*?)=(.*)$/);
      cookies[parts[1].trim()] = (parts[2] || "").trim();
    });
  return cookies;
};
// upload profile Image
const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, constentPath + "/images/agents");
  },
  filename: function (req, file, cd) {
    cd(null, new Date().getTime() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });
// validate data
const agentProfileData = Joi.object({
  _id: Joi.allow(),
  file: Joi.allow(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  firstname: Joi.string().alphanum().min(3).max(30).required(),
  lastname: Joi.string().alphanum().min(3).max(30).required(),
  position: Joi.allow(),
  license: Joi.allow(),
  gst: Joi.allow(),
  phone: Joi.number().min(10).required(),
  fax: Joi.allow(),
  company: Joi.allow(),
  address: Joi.allow(),
  about: Joi.allow(),
});

// get profile
function profilePage(req, res) {
  if (req.headers.cookie == undefined) {
    res.sendFile(constentPath + "/index.html");
  } else {
    const private = get_cookies(req)["AgentToken"];
    if (private) {
      res.sendFile(constentPath + "/page-my-profile.html");
    } else {
      console.log("please login");
      res.sendFile(constentPath + "/index.html");
    }
  }
}
// add profile data
function addProfile(req, res) {
  const AgentProfile = {
    ...req.body,
  };
  const private = get_cookies(req)["AgentToken"];
  let decodedPrivate = decodeURIComponent(private);
  let loginAgent = decodedPrivate.split("email");
  const loginAgentEmail = loginAgent[1];
  if (loginAgentEmail == req.body.email) {
    // agentProfileData.validate(AgentProfile);
    model.Agentprofile.findOne({
      where: { email: req.body.email },
    }).then((updateData) => {
      if (!updateData) {
        model.Agentprofile.create(AgentProfile)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        model.Agentprofile.update(AgentProfile, {
          where: { email: req.body.email },
        })
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  } else {
    res.send("You are not able");
  }
}
function getProfileData(req, res) {
  const private = get_cookies(req)["AgentToken"];
  let decodedPrivate = decodeURIComponent(private);
  let loginAgent = decodedPrivate.split("email");
  const loginAgentEmail = loginAgent[1];
  model.Agentprofile.findOne({
    where: { email: loginAgentEmail },
  })
    .then((data) => res.send(data))
    .catch((err) => {
      res.send(err);
    });
}

// change password
function changePassword(req, res) {
  const private = get_cookies(req)["AgentToken"];
  let decodedPrivate = decodeURIComponent(private);
  let loginAgent = decodedPrivate.split("email");
  const loginAgentEmail = loginAgent[1];
  const oldPassword = req.body.oldPassword;
  if (req.body.newPassword == req.body.rePassword) {
    model.Register.findOne({
      where: { email: loginAgentEmail },
    })
      .then(async (pass) => {
        const password = await bcrypt.hash(req.body.newPassword, 8);
        const matchPassword = await bcrypt.compare(oldPassword, pass.password);
        if (!matchPassword) {
          res.send("password not match");
        } else {
          model.Register.update(
            { password },
            { where: { email: loginAgentEmail } }
          ).then(() => {
            res.send("Password Updated");
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.send("enter same password");
  }
}
// Get all agents
function allAgent(req, res) {
  model.Agentprofile.findAll()
    .then((data) => res.send(data))
    .catch((err) => {
      res.send(err);
    });
}
module.exports = {
  profilePage,
  addProfile,
  upload,
  changePassword,
  getProfileData,
  allAgent,
};

const path = require("path");
const model = require("../../models");
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

// Dashboard function
function userAdmin(req, res) {
  if (req.headers.cookie == undefined) {
    res.sendFile(constentPath + "/index.html");
  } else {
    const private = get_cookies(req)["AgentToken"];
    if (private) {
      res.sendFile(constentPath + "/page-dashboard.html");
    } else {
      console.log("please login");
      res.sendFile(constentPath + "/index.html");
    }
  }
}
function AgentDetails(req, res) {
  const private = get_cookies(req)["AgentToken"];
  let decodedPrivate = decodeURIComponent(private);
  let loginAgent = decodedPrivate.split("email");
  const loginAgentEmail = loginAgent[1];
  model.Register.findOne({
    where: { email: loginAgentEmail, usertype: "Agent" },
  })
    .then((data) => {
      res.send(data.username);
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = { userAdmin, AgentDetails };

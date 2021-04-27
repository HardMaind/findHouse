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
function getPoperty(req, res) {
  res.sendFile(constentPath + "/page-add-new-property.html");
}
function addPoperty(req, res) {
  const property = { ...req.body };
  model.property
    .create(property)
    .then((propertyData) => {
      history.pushState({
        url: "/userAdmin/addproperty",
        data: {
          id: propertyData.id,
        },
      });
      res.send(propertyData);
    })
    .catch((err) => {
      console.log(err);
    });
}
function location(req, res) {
  const location = { ...req.body };
  const private = get_cookies(req)["AgentToken"];
  let decodedPrivate = decodeURIComponent(private);
  let loginAgent = decodedPrivate.split("email");
  const loginAgentEmail = loginAgent[1];
  model.property
    .update(location, { where: { email: loginAgentEmail } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports = { getPoperty, addPoperty, location };

const path = require("path");
const constentPath = path.resolve(
  __dirname,
  "../../../grandetest.com/theme/findhouse-html"
);
function authCheck(req, res, next) {
  var get_cookies = function (request) {
    var cookies = {};
    request.headers &&
      request.headers.cookie.split(";").forEach(function (cookie) {
        var parts = cookie.match(/(.*?)=(.*)$/);
        cookies[parts[1].trim()] = (parts[2] || "").trim();
      });
    return cookies;
  };
  try {
    const private = get_cookies(req)["AgentToken"];
    req.userData = private;
    next();
  } catch (error) {
    return res.sendFile(constentPath + "/index.html");
  }
}

module.exports = { authCheck };
// const path = require("path");
// const constentPath = path.resolve(
//   __dirname,
//   "../../../grandetest.com/theme/findhouse-html"
// );
// function authCheck(req, res, next) {
//   var get_cookies = function (request) {
//     var cookies = {};
//     request.headers &&
//       request.headers.cookie.split(";").forEach(function (cookie) {
//         var parts = cookie.match(/(.*?)=(.*)$/);
//         cookies[parts[1].trim()] = (parts[2] || "").trim();
//       });
//     return cookies;
//   };
//   try {
//     const private = get_cookies(req)["AgentToken"];
//     let decodedPrivate = decodeURIComponent(private);
//     let loginAgent = decodedPrivate.split("email");
//     const loginAgentEmail = loginAgent[1];
//     req.userData = private;
//     next();
//   } catch (error) {
//     return res.sendFile(constentPath + "/index.html");
//   }
// }

// module.exports = { authCheck };

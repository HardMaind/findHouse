const path = require("path");
const model = require("../models");
function save(req, res) {
  const contactData = {
    name: req.body.name,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    subject: req.body.subject,
    message: req.body.name,
  };
  model.Contact.create(contactData)
    .then((data) => {
      console.log(data);
      res.sendFile(
        path.resolve(
          __dirname,
          "../../grandetest.com/theme/findhouse-html/index.html"
        )
      );
    })
    .catch((err) => {
      console.log(err?.message);
    });
}

function get(req, res) {
  res.sendFile(
    path.resolve(
      __dirname,
      "../../grandetest.com/theme/findhouse-html/page-contact.html"
    )
  );
}

module.exports = { get, save };

const path = require("path");
require("dotenv").config(".././env");
// console.log(path.resolve(__dirname, "../env"));
const connectionDB = require("../backend_database/db/server");
const bodyparser = require("body-parser");
const express = require("express");
const app = express();
const port = parseInt(process.env.PORT) || 8000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// Routers
const registerRouter = require("../backend_database/routers/register");
const loginRouter = require("../backend_database/routers/login");
const contactRouter = require("./routers/contact");
const dashboardRouter = require("./routers/Agent/dashboard");
const profileRouter = require("./routers/Agent/profile");
const addpropertyRouter = require("./routers/Agent/addProperty");
//Connection with data base
connectionDB();

app.use(
  express.static(
    path.resolve(__dirname, "../grandetest.com/theme/findhouse-html/")
  )
);

const FileName = path.resolve(
  __dirname,
  "../grandetest.com/theme/findhouse-html/index.html"
);
app.get("/", (req, res) => {
  res.sendFile(FileName);
});
app.get("/register", (req, res) => {
  res.sendFile(FileName);
});
// Routers use in Application
app.use(registerRouter);
app.use(loginRouter);
app.use(contactRouter);
// Agents routers
app.use(dashboardRouter);
app.use(profileRouter);
app.use(addpropertyRouter);
app.listen(port, console.log(`http://127.0.0.1:${port}`));

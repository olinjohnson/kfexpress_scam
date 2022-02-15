const port = process.env.PORT || 3000;
const express = require("express");
const layouts = require("express-ejs-layouts");
const app = express();

const homeController = require("./controllers/homecontroller.js");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(layouts);

app.get("/", homeController.homePage);

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const port = process.env.PORT || 3000;
const express = require("express");
const layouts = require("express-ejs-layouts");
const socket = require("socket.io");
const app = express();

const homeController = require("./controllers/homecontroller.js");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(layouts);

app.get("/", (req, res) => {
  homeController.homePage(req, res);
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

var connections = [];
var views = 0;
const io = socket(server);
io.on("connection", (client) => {
  views++;
  console.log(
    "Client connected " +
      client.request.connection.remoteAddress +
      " " +
      views +
      " Views"
  );
  connections.push(client);
});

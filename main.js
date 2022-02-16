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
const io = socket(server);
io.on("connection", (client) => {
  console.log("Client connected");
  connections.push(client);
  console.log(connections);
});

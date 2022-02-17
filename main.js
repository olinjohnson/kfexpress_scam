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
  connections.push(client);
  client.on("client-addr", (data) => {
    console.log(
      `Connection IP: ${data} | Views: ${views} | ID: ${client.id} | ${client.handshake.time} | ${client.handshake.headers["user-agent"]}`
    );
  });
});

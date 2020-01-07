const path = require("path");
const express = require("express");

const categories = require("./routes/categories");
const items = require("./routes/categories");

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));

server.use("/api/v1", categories);
server.use("/api/v1", items);

module.exports = server;

const router = require("./routes/index.js");
const express = require("express");
const server = express();
const morgan = require("morgan"); //no lo pide pero trae rutas
//const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use(morgan("dev")); //para ver las rutas

server.use("/rickandmorty", router);

module.exports = server;

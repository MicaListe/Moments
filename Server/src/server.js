const express = require("express");
const routes = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/", routes);

server.use(cors({
   origin: 'https://moments-3oti-hrwioknqb-micaela-listes-projects.vercel.app',
   credentials: true, // Permite incluir cookies en las solicitudes (si las hay)
   methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'], // Métodos HTTP permitidos
   allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'], // Cabeceras permitidas
}));

module.exports = server;

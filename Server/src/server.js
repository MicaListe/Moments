const express = require("express");
const routes = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
// server.use(cors());

server.use("/", routes);

server.use(cors({
   origin: 'moments-3oti.vercel.app',
   credentials: true, // Permite incluir cookies en las solicitudes (si las hay)
   methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'], // Métodos HTTP permitidos
   allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Access-Control-Allow-Origin'], // Cabeceras permitidas
 }));

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

module.exports = server;
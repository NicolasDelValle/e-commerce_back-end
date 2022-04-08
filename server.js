require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const PORT = process.env.PORT || 4100;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

routes(app);
//dbInitialSetup(); // Comentar para no correr DB cada vez.

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${PORT}!\n`)
);

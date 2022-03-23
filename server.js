require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 4100;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`)
);

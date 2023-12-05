const express = require("express");
let rectangulos = require(".rectangulos.json");

const servidor = express();

servidor.use(express.static(".html"));

servidor.post("/crear", (peticion, respuesta) => {
  respuesta.send("soy el backend");
});

servidor.listen(3000);

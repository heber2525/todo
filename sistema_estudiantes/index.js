const express = require("express");
const { aulas, guardarAula, estudiantes, guardarEstudiante } = require("./db");
const { urlencoded } = require("body-parser");

const servidor = express();

servidor.set("view engine", "ejs");

servidor.use(urlencoded({ extended: true }));

servidor.use(express.static("./estaticos"));

servidor.get("/estudiantes", async (peticion, respuesta) => {
  let [errorEstudiantes, listaEstudiantes] = await estudiantes();

  let [errorAulas, listaAulas] = await aulas();

  respuesta.render("estudiantes", { estudiantes: listaEstudiantes, aulas: listaAulas });
});

servidor.get("/aulas", async (peticion, respuesta) => {
  let [error, listaAulas] = await aulas();

  respuesta.render("aulas", { aulas: listaAulas });
});

servidor.post("/crear-aula", async (peticion, respuesta) => {
  let { nombre } = peticion.body;
  let { resultado } = await guardarAula(nombre);

  if (resultado == "ok") {
    return respuesta.redirect("/aulas");
  }
  respuesta.send("Ha ocurrido un error");
});

servidor.post("/crear-estudiante", async (peticion, respuesta) => {
  let { nombre, aula } = peticion.body;

  let { resultado } = await guardarEstudiante(nombre, aula);

  if (resultado == "ok") {
    return respuesta.redirect("/estudiantes");
  }
  respuesta.send("Ha ocurrido un error");
});
servidor.listen(3000);

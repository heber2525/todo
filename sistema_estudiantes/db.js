const postgres = require("postgres");

function conectar() {
  return postgres({
    host: "localhost ",
    port: 5432,
    database: "colegio",
    user: "postgres",
    password: "admin",
  });
}
function estudiantes() {
  return new Promise(async (callback) => {
    let conexion = conectar();
    try {
      let estudiantes = await conexion`SELECT * FROM estudiantes`;
      conexion.end();
      callback([null, estudiantes]);
    } catch (error) {
      callback([error]);
    }
  });
}

function aulas() {
  return new Promise(async (callback) => {
    let conexion = conectar();
    try {
      let aulas = await conexion`SELECT * FROM aulas`;
      conexion.end();
      callback([null, aulas]);
    } catch (error) {
      callback([error]);
    }
  });
}

function guardarAula(nombre) {
  return new Promise(async (callback) => {
    let conexion = conectar();

    let resultado = "ko";

    try {
      let { count } = await conexion`INSERT INTO aulas (nombre) VALUES (${nombre})`;

      conexion.end();

      if (count > 0) {
        resultado = "ok";
      }
    } catch (error) {
      callback(error);
    } finally {
      callback({ resultado });
    }
  });
}

function guardarEstudiante(nombre) {
  return new Promise(async (callback) => {
    let conexion = conectar();

    let resultado = "ko";

    try {
      let { count } = await conexion`INSERT INTO estudiantes (nombre,aula) VALUES (${nombre},${aula})`;

      conexion.end();

      if (count > 0) {
        resultado = "ok";
      }
    } catch (error) {
      callback(error);
    } finally {
      callback({ resultado });
    }
  });
}

module.exports = { aulas, guardarAula, estudiantes, guardarEstudiante };

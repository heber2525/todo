const formulario = document.querySelector("form");
const inputs = document.querySelectorAll('input[type="text"]');
const contenedor = document.querySelector(".contenedor-rectangulos");

function color() {
  return `rgb(${[0, 0, 0].map(() => Math.floor(Math.random() * 256)).join(",")})`;
}
function cuadro(alto, ancho, color) {
  let cuadro = document.createElement("div");
  cuadro.className = "rectangulo";
  cuadro.style.width = ancho;
  cuadro.style.height = alto;
  cuadro.style.backgroundColor = color;
  return cuadro;
}
formulario.addEventListener("click", (evento) => {
  evento.preventDefault();
  contenedor.appendChild(cuadro(inputs[0].value, inputs[1].value, color()));
  inputs.forEach((input) => (input.value = ""));
});
fetch("/crear", {
  method: "POST",
})
  .then((respuesta) => respuesta.text())
  .then((respuesta) => {
    console.log(respuesta);
  });

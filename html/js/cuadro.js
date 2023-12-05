// class Cuadro{
//     constructor(id,ancho,alto,color,contenedor){
//         this.id = id;
//         this.DOM = null;
//         this.crearCuadro(ancho,alto,color,contenedor);
//     }
//     crearCuadro(ancho,alto,color,contenedor){
//         this.DOM = document.createElement("div");
//         this.DOM.className = "cuadro";
//         this.DOM.style.backgroundColor = color;
//         this.DOM.style.width = ancho;
//         this.DOM.style.height = alto;

//         this.DOM.addEventListener("click", () => {
//             this.borrarCuadro();
//         });

//         contenedor.appendChild(this.DOM);
//     }
//     async borrarCuadro(){
//         let {resultado} = await fetch("/borrar", {
//             method : "DELETE",
//             body : JSON.stringify({ id : this.id }),
//             headers : {
//                 "Content-type" : "application/json"
//             }
//         }).then(respuesta => respuesta.json());
//         if(resultado == "ok"){
//             return this.DOM.remove();
//         }
//         console.log("..error al usuario");
//     }
// }

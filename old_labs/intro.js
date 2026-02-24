//consola (log,info,warn,error,assert)
console.log("hola!!");
console.info("informacion");
console.warn("vertencia");
console.error("error");
//Compara valor y tipo de dato
console.assert(1 === true);
//variables constantes
//Forma antigua de declarar variables, NO SE RECOMIENDA
var videojuego_1 = "Minecraft";
//Forma correcta de declarar variables
let videojuego_2 = "Halo";

const precio = 55;
// funciones
function is_precio(){
    return precio;
}
console.log(is_precio());
//funciones modernas
() => {};

const vidas = () => {
    console.log("Te quedan 3 vidas");
}

vidas();
//arreglos
const videojurgos = ["Halo"];
const jugadores = new Array();
//recorridos alternativos del arreglo 
for(let juego in videojuegos){
    console.log(juego);
}
//objetos
const objeto ={};
const videojuego = {
    nombre: "Minecraft",
    genero: "sandbox",
    plataforma: ["pc","xbox","movil"],
}

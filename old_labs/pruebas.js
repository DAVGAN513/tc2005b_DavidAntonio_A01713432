console.log("Node funciona");
//Promedio
function promedio(arreglo){
    let suma = 0;
    for(i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma / arreglo.length;
}
let numeros = [10, 20, 30, 40, 50];
let resultado = promedio(numeros);

console.log("Promedio: ",resultado);

//archivo de texto
const fs = require("fs");

function escribirArchivo(texto){
    fs.writeFileSync('Salida.txt', texto);
    console.log("Archivo creado");
}
escribirArchivo("Este es tu texto");

//factorial
function factoniarl(n){
    let numero = 1;
    for(i = 1; i < n.length; i++){
        numero *= i;
    }
    return numero;
}
let numero = 5;
console.log("El factorial es: ",factorial(numero));

const http = require("http");
const servidor = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Servidor");
});

servidor.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
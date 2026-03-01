// Ejercicio 1 
let numero = prompt("Ingresa tu número: ");
document.write("<table border = 1");
document.write("<tr> <th>NUMERO</th>  <th>CUADRADO</th> <th>CUBO</th> </tr>");

for(let i = 1; i <= numero ; i++){
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + (i * i) + "</td>");  
    document.write("<td>" + (i * i * i) + "</td>");
    document.write("</tr>");  
}
document.write("</table>");

//Ejercicio 2
let num1 = Math.floor(Math.random() * 50) + 1;
let num2 = Math.floor(Math.random() * 50) + 1;

let tiempoInicial = Date.now();
let respuesta = prompt("¿Cuánto es " + num1 + "+" + num2 + "?" );
let tiempoFinal = Date.now();
let tiempoReal = (tiempoFinal - tiempoInicial)/1000;

let resultadoCorrecto = num1 + num2;
if(Number(respuesta) == resultadoCorrecto){
    document.write("Bien hecho, respuesta correcta");
}else{
    document.write("Te equivocaste vuelve a intentar");
}
document.write("<p>Tiempo que tomaste al contestar: "+ tiempoReal + "segundos </p>");

//Ejercicio 3
function contador(arreglo){
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;

    for(let i = 1; i < arreglo.length; i++){
        let numeroActual = arreglo[i];
        if(numeroActual < 0){
            negativos++;
        }else if (numeroActual == 0){
            ceros++;
        }else{
            positivos++;
        }
    }
    return{
        totalNegativos: negativos,
        totalCeros: ceros,
        totalPositivos: positivos
    };
}
let numeros = [3, 5, -2, 0, -9, 0];
let resultados = contador(numeros);

console.log("Negativos: ", resultado.totalNegativos);
console.log("Ceros: ",resultado.totalCeros);
console.log("Positivos: ",resultado.totalPositivos);

//Ejercicio 4
function promedio(matriz){
    let lista = [];

    for(i = 0; i <matriz.length; i++){
        let suma = 0;
        for(j = 0; j <matriz[i].length ; i++){
            suma += matriz[i][j];
        }
        let promedio = suma/matriz[i].length;
        lista.push(promedio);
    }
    return lista;
}
let promedios = [
    [10, 9, 8],
    [7, 6, 6],
    [6, 6, 6]
];
let resultado = promedio(promedios);
console.log("Los promedios son: ",resultado);

//Ejercicio 5
function inverso(numero){
    let texto = numero.toString();
    let invertir = texto.split("").reverse().join("");
    let numeroInvertido = Number(invertir);
    return numeroInvertido;
}
console.log(inverso(12345));
console.log(inverso(789));
console.log(inverso(7894));
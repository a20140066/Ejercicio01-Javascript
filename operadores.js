alert("Bienvenido al restaurante. Esta es tu cuenta.");
var num1 = parseInt(prompt("Costo de Entrada."));
var num2 = parseInt(prompt("Costo del Plato Principal"));
var num3 = parseInt(prompt("Costo del Postre"));
alert("Revisa los resultados en la consola presionando F12.");
//Operaciones
var costo = num1;
var costo2 = num2;
var costo3 = num3;
var total = num1 + num2 + num3;
var igv = (total*0.18)+total
//Mostrar Resultados
console.log("El costo de la entrada es: " + costo);
console.log("El costo del Plato Principal: " + costo2);
console.log("El costo del Postre es: " + costo3);
console.log("El costo total es: " + total )
console.log("El costo total con IGV es: " + igv);
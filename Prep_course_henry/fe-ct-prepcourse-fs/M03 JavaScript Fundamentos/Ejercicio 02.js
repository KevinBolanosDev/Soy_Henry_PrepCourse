/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   return string;
}
console.log(devolverString("Esto es un string"));

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   return x + y;
}
console.log(suma(17, 75));

function resta(x, y) {
   // Retorna el resultado de la resta.
   return x - y;
}
console.log(resta(89, 13));

function divide(x, y) {
   // Retorna el resultado de su división.
   return x / y;
}
console.log(divide(100, 4));

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   return x * y;
}
console.log(multiplica(25, 125));

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   return x % y;
}
console.log(obtenerResto(1235, 4));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};

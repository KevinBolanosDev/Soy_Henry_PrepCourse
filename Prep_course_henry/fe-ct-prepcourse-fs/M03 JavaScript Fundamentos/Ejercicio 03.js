/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   return x === y;
}
// console.log(sonIguales(5, 5));
// console.log(sonIguales(7, 9));

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   return str1.length === str2.length;
}
// console.log(tienenMismaLongitud('Hola', 'Hola'));
// console.log(tienenMismaLongitud('Hola', 'Mundo')); 

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   return num < 90;
}
// console.log(menosQueNoventa(75));
// console.log(menosQueNoventa(106));

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   return num > 50
}
// console.log(mayorQueCincuenta(95));
// console.log(mayorQueCincuenta(45));

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   return num % 2 === 0;
}
// console.log(esPar(8));
// console.log(esPar(5));

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   return num % 3 === 1;
}
// console.log(esImpar(10));
// console.log(esImpar(5));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};

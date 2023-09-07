/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   return Math.pow(num, 2);
}
// console.log(elevarAlCuadrado(20));

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   return  Math.pow(num, 3);
}
// console.log(elevarAlCubo(30, 3));

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   return Math.pow(num, exponent);
}
// console.log(elevar(8, 4));

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   return Math.round(num)
}
// console.log(redondearNumero(25.78));

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   return Math.ceil(num);
}
// console.log(redondearHaciaArriba(145.87));

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   return Math.random()
}
// console.log(numeroRandom());

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};

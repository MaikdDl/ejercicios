/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// Ejercicios obtenidos de la web https://tutobasico.com/basicos2-javascript/

// Ejercicio 1

// 'use strict';

// for (let i = 1; i <= 30; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write(i);
//     }
//     document.write("<br>");
// }

// Ejercicio 2

// 'use strict';

// let num;

// do {
//     num = prompt("Introduzca un número, por favor:");
// } while (isNaN(num));

// if (num <= 0) {

//     num = prompt("El número introducido no es válido, por favor, introduzca un nuevo número");
// }
// for (let i = num; i >= 1; i--) {
//     for (let j = i; j >= 1; j--) {
//         console.log(i);
//         document.write(i);
//     }
//     document.write("<br>");
// }

// Ejercicio 3

// 'use strict';

// let num;

// do {
//     num = prompt("Introduzca un número entre 0 y 50, por favor:")
// } while (isNaN(num));

// if (num <= 0 || num > 50) {
//     num = prompt("El número introducido no es válido, por favor, introduzca un nuevo número");
// }

// for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j);
//     }
//     document.write("<br>");
// }

// Ejercicio 4

// for (let i = 1; i <= 500; i++) {
//   document.write(i)
//   if (i % 4 == 0) {
//     document.write(" (Múltiplo de 4)");
//   }
//   if (i % 9 == 0) {
//     document.write(" (Múltiplo de 9)");
//   }
//   document.write("<br>");
//   if (i % 5 == 0) {
//     document.write("<hr>");
//   }
// }

// Ejercicio 5

// 'use strict';

// let fil;
// let col;

// do {
//   fil = prompt("Introduzca el número de filas, por favor:");
// } while (isNaN(fil));


// do {
//   col = prompt("Introduzca el número de columnas, por favor:");
// } while (isNaN(col));

// let res = fil * col;

// document.write("<table border>");

// for (let i = 0; i < fil; i++) {
//   document.write("<tr>");
//   for (let j = 0; j < col; j++) {
//     document.write("<td>");
//     document.write(res);
//     res--;
//     document.write("</td>");
//   }
//   document.write("</tr>");
// }
// document.write("</table>");


// Ejercicios obtenidos de la web https://tutobasico.com/basicos-3-javascript/

// Ejercicio 1
// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor

// const edad1 = prompt("Introduzca la edad 1:");
// const nombre1 = prompt("Introduzca el nombre 1:");

// const edad2 = prompt("Introduzca la edad 2:");
// const nombre2 = prompt("Introduzca el nombre 2:");

// const edad3 = prompt("Introduzca la edad 3:");
// const nombre3 = prompt("Introduzca el nombre 3:");

// let mayorEdad = 0;
// let mayorNom = "";


// if (edad1 > mayorEdad) {
//   mayorEdad = edad1;
//   mayorNom = nombre1;
// }
// if (edad2 > mayorEdad) {
//   mayorEdad = edad2;
//   mayorNom = nombre2;
// }
// if (edad3 > mayorEdad) {
//   mayorEdad = edad3;
//   mayorNom = nombre3;
// }

// document.write("La persona de mayor edad es: " + mayorNom);


// Ejercicio 2
//Realiza un script que genere un número aleatorio entre 1 y 99

// console.log(Math.floor(Math.random() * (99) + 1));


// Ejercicio 3
// Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno

// const num1 = Math.floor(Math.random() * (99) + 1);

// let num2 = 0;
// let num3 = 0;

// do {
//   num2 = Math.floor(Math.random() * (99) + 1);
// } while (num2 == num1);

// do {
//   num3 = Math.floor(Math.random() * (99) + 1);
// } while (num3 == num1 || num3 == num2);

// console.log("Número 1:" + num1);
// console.log("Número 2:" + num2);
// console.log("Número 3:" + num3);


// Ejercicio 4 
// Realiza un script que imprima 14 resultados aleatorios de una quiniela 1 X 2.

// let result = 0;

// for (let i = 1; i < 15; i++) {
//   result = Math.floor(Math.random() * (3) + 1);
//   if (result == 3) {
//     result = "X"
//   }
//   document.write("Resultado " + i + ": " + result + "<br>");
// }


// Ejercicios obtenidos de la web https://tutobasico.com/basicos-4-javascript/

// Ejercicio 1
// Realiza un script que pida un texto y lo muestre en mayúsculas.

// let texto = prompt("Introduzca un texto, por favor:");

// console.log(texto.toUpperCase());

// Ejercicio 2
// Realiza un script que pida una cadena de texto y la muestre poniendo el signo – entre cada carácter 
// sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// let texto = prompt("Introduzca un texto, por favor:");
// let separador = "";


// let letras = texto.split(separador)

// document.write(letras.join("-"));


// Ejercicio 3
// Realiza un script que cuente el número de vocales que tiene un texto.


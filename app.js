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

//'use strict'

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

//'use strict'

// console.log(Math.floor(Math.random() * (99) + 1));


// Ejercicio 3
// Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno

//'use strict'

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

//'use strict'

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

//'use strict'

// let texto = prompt("Introduzca un texto, por favor:");

// console.log(texto.toUpperCase());

// Ejercicio 2
// Realiza un script que pida una cadena de texto y la muestre poniendo el signo – entre cada carácter 
// sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

//'use strict'

// let texto = prompt("Introduzca un texto, por favor:");
// let separador = "";


// let letras = texto.split(separador)

// document.write(letras.join("-"));


// Ejercicio 3
// Realiza un script que cuente el número de vocales que tiene un texto.

//'use strict'

// let texto = prompt("Introduzca un texto, por favor:");
// let vocales = 0;
// texto = texto.toUpperCase();

// console.log(texto);

// for (let i = 0; i < texto.length; i++) {
//     if (texto[i] == "A" || texto[i] == "E" || texto[i] == "I" || texto[i] == "O" || texto[i] == "U") {
//         vocales++;
//     }
//     console.log(vocales);
// }

// document.write("El número de vocales es: " + vocales);


// Ejercicio 4
// Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. 
// Ejemplo: Si escribimoe el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo “(“
//pero no el signo “)” mostrará desde el primer paréntesis hasta el final.

// 'use strict';

// let texto = prompt("Introduzca un texto, por favor:");
// let letras = "";
// let flag = false;

// for (let i = 0; i < texto.length; i++) {
//   if (texto[i] == "(" || texto[i] == ")") {

//     // ponemos un flag a true en plan empezamos a contar
//     flag = !flag
//   }

//   if (flag) {
//     if (texto[i] != "(" && texto[i] != ")") {
//       letras = letras + texto[i];
//     }
//   }

// }

// document.write(letras);



// Ejercicio 5
// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

// 'use strict';

// let texto = prompt("Introduzca un texto por favor:");
// let alReves = "";

// for (let i = (texto.length - 1); i >= 0; i--) {
//   alReves = alReves + texto[i];
// }

// document.write(alReves);


//Ejercicio 6
// Realiza un script que pida un texto e indique si es un palíndromo. Ejemplo de palíndromo: “Dabale arroz a la zorra el abad”.

// 'use strict';

// let texto = prompt("Introduzca un palíndromo, por favor:");
// let workText = texto.toUpperCase();
// let pal = false;
// let alReves = "";

// workText = workText.replace(/ /g, "");

// for (let i = (workText.length - 1); i >= 0; i--) {
//   alReves = alReves + workText[i];
// }

// for (let i = 0; i <= (workText.length - 1); i++) {
//   if (workText[i] != alReves[i]) {
//     break;
//   } else {
//     pal = true;
//   }
// }

// if (pal) {
//   document.write(texto + ": El texto introducido es un palíndromo");
// } else {
//   document.write(texto + ": El texto introducido no es un palíndromo")
// }

// Ejercicios obtenidos de la web https://tutobasico.com/basicos-5-javascript/

// Ejercicio 1 
// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado

// 'use strict'

// let texto = prompt("Introduzca un texto, por favor:");
// let posición = 0;
// let vocal;
// texto = texto.toUpperCase();

// console.log(texto);

// for (let i = 0; i < texto.length; i++) {
//   if (texto[i] == "A" || texto[i] == "E" || texto[i] == "I" || texto[i] == "O" || texto[i] == "U") {
//     posición = i + 1;
//     vocal = (texto[i]).toLowerCase();
//     break;
//   }
// }

// document.write("La primera vocal del texto es la '" + vocal + "', y se encuentra en la posición: " + posición);


// Ejercicio 3
// Realiza un script que muestre la serie de fibonacci hasta un número entre 1 y 100 pedido por teclado


// 'use strict';

// let num = prompt("Introduzca un número entre 1 y 100, por favor:");
// let numFib = 1;
// let num1 = 0;
// let num2 = 1;

// if (num >= 1 && num <= 100) {

//   document.write("La serie de Fibonacci hasta el número " + num + ":<br>" + num1 + "<br>");

//   do {
//     document.write(numFib + "<br>");
//     numFib = num1 + num2;
//     num1 = num2;
//     num2 = numFib;

//   } while (numFib <= num);
// } else {
//   alert("El número introducido no es válido");
// }

// El mismo ejercicio pero el número introducido es la cantidad de valores de la serie de Fibonacci 
// (si el usuario introduce 5, se mostrarán los 5 primeros números de la serie)

// 'use strict';

// let num = prompt("Introduzca un número entre 1 y 100, por favor:");
// let numFib = 1;
// let contador = 0;
// let num1 = 0;
// let num2 = 1;

// if (num >= 1 && num <= 100) {

//   document.write("La serie de Fibonacci hasta el número " + num + ":<br>" + num1 + "<br>");
//   contador++;
//   do {
//     document.write(numFib + "<br>");
//     numFib = num1 + num2;
//     num1 = num2;
//     num2 = numFib;
//     contador++;

//   } while (contador < num);
// } else {
//   alert("El número introducido no es válido");
// }


// Realiza un juego de Piedra Papel Tijera contra el Pc

// 'use strict';

// let jugadaUsuario;
// let jugadaPc;
// let jugadas = 0;
// let ganadas = 0;
// let empate = 0;
// let perdidas = 0;

// do {

//   jugadaUsuario = prompt("Introduzca una jugada:" + "/n" + "Piedra: 1 - Papel: 2 - Tijera: 3");

//   while (jugadaUsuario < 1 || jugadaUsuario > 3) {
//     alert("El número introducido no es válido");
//     jugadaUsuario = prompt("Por favor, introduzca una jugada válida:" + "/n" + "Piedra: 1 - Papel: 2 - Tijera: 3");
//   }

//   jugadaPc = Math.floor(Math.random() * (3) + 1);

//   jugadas++;

//   if (jugadaUsuario == 1 && jugadaPc == 1) {
//     alert("Piedra - Piedra: Empate");
//     empate++;
//   } else if (jugadaUsuario == 1 && jugadaPc == 2) {
//     alert("Piedra - Papel: ¡Has perdido!");
//     perdidas++;
//   } else if (jugadaUsuario == 1 && jugadaPc == 3) {
//     alert("Piedra - Tijera: Has ganado. ¡¡Enhorabuena!!");
//     ganadas++;
//   } else if (jugadaUsuario == 2 && jugadaPc == 1) {
//     alert("Papel - Piedra: Has ganado. ¡¡Enhorabuena!!");
//     ganadas++;
//   } else if (jugadaUsuario == 2 && jugadaPc == 2) {
//     alert("Papel - Papel: Empate");
//     empate++;
//   } else if (jugadaUsuario == 2 && jugadaPc == 3) {
//     alert("Papel - Tijera: ¡Has perdido!");
//     perdidas++;
//   } else if (jugadaUsuario == 3 && jugadaPc == 1) {
//     alert("Tijera - Piedra: ¡Has perdido!");
//     perdidas++;
//   } else if (jugadaUsuario == 3 && jugadaPc == 2) {
//     alert("Tijera - Papel: Has ganado. ¡¡Enhorabuena!!");
//     ganadas++;
//   } else {
//     alert("Tijera - Tijera: Empate");
//     empate++;
//   }
// } while (confirm("¿Quieres volver a jugar"));

// document.write("Partidas jugadas: " + jugadas + "<br>");
// document.write("Partidas ganadas: " + ganadas + "<br>");
// document.write("Partidas empatadas: " + empate + "<br>");
// document.write("Partidas perdidas " + perdidas + "<br>");


// Ejercicios obtenidos de la web https://tutobasico.com/ejercicios-de-javascript-6/

// Ejercicio 1
// Crea una función que devuelva el número PI con dos decimales. Utiliza la variable PI que ya existe en javascript

// 'use strict';

// function getPi() {
//   return Math.PI.toFixed(2);
// }

// document.write(getPi());


// Ejercicio 2
// Crea una función que reciba un parámetro, un dni, y devuelva la letra del mismo. Si el dni pasado tiene algún error devolverá “”

// let numDni = prompt("Introduzca el número de su DNI, por favor");
// let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

// function calcularLetra() {
//   while (numDni < 1 || numDni > 99999999) {
//     alert("El número introducido no es válido");
//     numDni = prompt("Por favor, introduzca un valor correcto");
//   }
//   let resto = numDni % 23;
//   let letra = "";
//   letra = letras[resto];

//   return letra;
// }

// document.write(calcularLetra(numDni));


// Ejercicio 3 
// Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido.
// Si no recibe el iva, aplicará el 21 por ciento por defecto.

// 'use strict';

// let precio = prompt("Por favor, introduzca el precio del producto");
// let iva = prompt("Por favor, introduca el IVA aplicable (si no introduce ninguno se aplicará el 21%");
// let precioIva;
// let precioFinal;

// precio = parseInt(precio);
// iva = parseInt(iva);

// if (iva == undefined) {
//   iva = 21;
// }

// function calcularIva(precio, iva) {
//   precioIva = (precio * iva) / 100;
//   document.write("Precio: " + precio + "<br>Iva: " + iva + "<br>");
//   precioFinal = precio + precioIva;
//   return precioFinal;
// }

// document.write("El precio con IVA incluído es: " + calcularIva(precio, iva));


// Ejercicio 4 
// Crea una función que reciba un texto y lo devuelva al revés

// 'use strict';

// let texto = prompt("Introduzca un texto por favor:");
// let alReves = "";

// function textoDelReves(texto) {
//   for (let i = (texto.length - 1); i >= 0; i--) {
//     alReves = alReves + texto[i];
//   }
//   return alReves;
// }

// document.write(textoDelReves(texto));


// Ejercicio 5
// Crea una función que genere número entero aleatorio entre min y max, que serán pasados como parámetros. Por defecto min = 1 y max = 100

// 'use strict';

// let numMin = prompt("Por favor, introduce el número mínimo:");

// if (numMin == "") {
//   numMin = 1;
// }
// numMin = parseInt(numMin);

// let numMax = prompt("Por favor, introduce el número máximo:");

// if (numMax == "") {
//   numMax = 100;
// }
// numMax = parseInt(numMax);

// function aleatorio(max, min) {

//   let numAleatorio = Math.round((Math.random() * (max - min)) + min);

//   return numAleatorio;
// }

// document.write("El número aleatorio generado entre " + numMin + " y " + numMax + " es: " + aleatorio(numMin, numMax));


// Ejercicio 6
// Crea una función que genere 100 números aleatorios entre 1 y 1000 que no se repitan y luego muestralos por pantalla

let numAleatorio = Math.floor(Math.random() * (1000 - 1) + 1);
let arrAleatorio = [];

function generarAleatorio() {
  debugger;

  for (let i = 0; i <= arrAleatorio.length; i++) {
    if (numAleatorio != arrAleatorio[i]) {
      arrAleatorio = arrAleatorio.push(numAleatorio);
    }
    document.write(numAleatorio, arrAleatorio[i]);
  }
  return arrAleatorio;
}

console.log(arrAleatorio);
let resultado = generarAleatorio();
document.write(arrAleatorio);
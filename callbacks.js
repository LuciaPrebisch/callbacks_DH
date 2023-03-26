/* Es una funcion que se pasa como parametro de otra funcion. 
La funcion que lo recibe es quien se encarga de ejectuarla cuantas veces sea necesario*/

let sumar = (numero1, numero2) => numero1 + numero2 ;
let restar = (numero1, numero2) => numero1 + numero2 ;
let multiplicar = (numero1, numero2) => numero1 * numero2 ;
let dividir = (numero1, numero2) => numero1 / numero2 ;

let calculadora = (numero1, numero2, operacion) => operacion (numero1, numero2);
console.log(calculadora(5, 10 , multiplicar))


function nombreCompleto (nombre, apellido) {
    return nombre + "" + apellido ;
} ;

function saludar (nombre, apellido, callback) {
    return "Hola" + callback (nombre, apellido) + " !! "
}

console.log(saludar ("Lucia", "Prebisch", nombreCompleto))

/* 1) Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.
a-La primera función se llamará doble. Esta recibirá un número y retornará el doble.
b-La segunda función se llamará triple. Esta recibirá un número y retornará el triple.
c- La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. Esta retornará el valor de aplicar dicha función al valor que recibió*/

// a
let doble = (numeroA, numberoB) => (numeroA * numberoB)
let funcionMatematica = (numeroA, numberoB, callback) => callback(numeroA, numberoB)

console.log(funcionMatematica(2,4, doble))

// b
let triple = (numeroA, numberoB) => (numeroA / numberoB)
let funcionMat = (numeroA, numberoB, callback) => callback (numeroA, numberoB)
console.log (funcionMat (15,3 , triple))

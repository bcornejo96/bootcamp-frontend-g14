console.log('HolaJavascript de nuevo')

console.log('Hola Javascript')

// Esto es un comentario para una linea

/* esto es un comentario para para varias lineas */

// tipo de datos

//underfined
let nombre;
console.log(nombre);
console.log(typeof nombre);

//null
let apellido = null;
console.log(apellido);
console.log(typeof apellido)

//boolean
const descuento = false
console.log(descuento)

//number
const numero1 = 20;
const numero2 = 20.5;
const numero3 = -36;
console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof numero3);

//string
const alumna = 'Mylene'
console.log(typeof alumna);
const numero = '200';
console.log(typeof numero);




//Object
//Function
//bigInt
//Symbol

//Variables y constantes
//var -> ES5
//const, let -> ES6(lo recomendable)

const edad = 55;
console.log(edad);


let edad2 = 24;
edad2 = 18;
edad2 = 22;
console.log(edad2);

//Operadores matematicos
console.log(1 + 2);
console.log(3-2);
console.log(2*3);
console.log(1/2);
console.log(2**3);

//Operadores
//Operadores de igualdad no estricta
1 == 1
1 == '1'

//Operadores de igualdad y desigualdadestricta(Recomendable)
1 === 1
1 === '1'


// Otros operadores, siempre devuelve un boolean
8>5
5<1
8<=5;
8>=5;


//Operadores de cadena(concatenacion)
const saludo = 'Hola, '
const nombreCompleto = 'Victor' + ' '+ 'Villazon'

const saludoAmigo = saludo + nombreCompleto
console.log(nombreCompleto);
console.log(saludoAmigo);

//Operadores Ternario
const edad1 = 24
const soyMayorOMenor = edad1 > 18? 'mayor' : 'menor'
console.log(soyMayorOMenor)


//Operadores logicos
true && false // -> and
!false //negacio



// EJERCICIOS
// 1. Retorna True si  dos strings tienen la misma longitud sino devolver False
const palabra1 = 'Bruno'
const palabra2 = 'Cornejo'
console.log(palabra1.length === palabra2.length)

// 2. Retornar True si un numero es menor que 40 sino devolver False
const number = 39
const MenorOMayor = number > 40? 'true':'false'
console.log(MenorOMayor)

// 3. Retornar True si un numero es menor que 60 sino devolver False
const number1 = 20
const MayorOMenor = number1 < 60? 'true':'false'
console.log(MayorOMenor)

// 4. Retornar True si un numero es par sino devolver False
const number3 = 36
console.log(number3%2 === 0)

// 5. Retornar True si un numero es impar sino devolver False
const number4 = 21
console.log(number4%2 === 0)



//Nuevo Ejercicios
// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
const NuevaEdad = 17
if(NuevaEdad > 18){
  'mayor de edad'
}
  else
    'menor de edad'
  

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki
const saludo1 = 'Ingles'

if(saludo1== 'Español'){
  'hola'
} else if(saludo1== 'Ingles'){
  'hello'
} else
  'aimara'


// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número



function imprimirUnNombre(){
  console.log('Hola soy Bruno')
  console.log('Y soy fronted')
}
imprimirUnNombre()



function imprimirMiNombre(nombre){
  console.log('hola soy '+ nombre)
}

imprimirMiNombre('Bruno')



const miEdad = 16
function esMayorOMenorDeEdad(edad){
  if(edad>=18){
    console.log('mayor de edad')
  }else{
    console.log('menor de edad')
  }
}

esMayorOMenorDeEdad(miEdad)
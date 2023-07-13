console.log('hola js');

// Arrays

const numero1 = 1
const numero2 = 2
const numero3 = 3

const ListaNumeros = [1, 2, 3, 'Victor', 'Villazón', true]
console.log(ListaDeValores)

console.log(ListaNumeros[0])
console.log(ListaNumeros[3])

ListaNumeros[2] = 99

console.log(ListaDeValores)

ListaNumeros.push('javascript')

console.log(ListaDeValores)

ListaDeValores.pop()

console.log(ListaDeValores)




//Objetos

// {key : value}
const miObjeto = {
    nombre: 'Bruno',
    apellido: 'Cornejo',
    'mi edad' : 29
}

console.log(miObjeto)

console.log(miObjeto.nombre)
console.log(miObjeto.apellido)
console.log(miObjeto.edad)

console.log(miObjeto['nombre'])
console.log(miObjeto['apellido'])

delete miObjeto.apellido

console.log(miObjeto)


// DESTRUCTURING

const nombreValue = miObjeto.nombre

console.log(nombreValue)

const {nombre, apellido} = miObjeto

console.log(nombre,apellido)

const { nombre: nombreValor, apellido: apellidoValor} = miObjeto
console.log(nombreValor,apellidoValor)


//Spread operator















// Funciones en JavaScript
// const saludar = function (nombre) {
//     return 'Hola, ' + nombre;
// }

const saludar2 = (nombre )=> {
    return 'Hola, ' + nombre;
}

const saludar3 = (nombre)  => 'Hola, ' + nombre;
const saludar4 = ()  => 'Hola Mundo';



// console.log(saludar('Goku'));

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'Elpapi3123'
    });

const user = getUser();
console.log(user);

// Tarea
// 1. Transformen a una funcion de flecha
// 2. Tiene que retornar un objeto Implicito
// 3. Pruebas 
const getUsuarioActivo = (nombre) => ({uid: 'ABC1231', username: nombre});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

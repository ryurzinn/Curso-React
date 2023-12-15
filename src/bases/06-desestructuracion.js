

// Desestructuracion 
// Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado',
};

const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usarContext = ({ clave , nombre ,edad, rango = 'Capitan'}) => {

    return {
        nombreClave: clave,
        anios: edad,
        latLng: {
            lat: 14.232,
            lng: -12.312,
        }
    }
}

const { nombreClave, anios, latLng:{lat, lng} } = usarContext(persona);

console.log(nombreClave, anios)
console.log(lat, lng)
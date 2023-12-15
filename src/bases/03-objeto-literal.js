
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 342423234,
        lat: 12.2323,
        lng: 22.3434434,
  }
};

console.table({persona});

const persona2  = {...persona};
persona2.nombre = 'Peter';

console.table(persona2)
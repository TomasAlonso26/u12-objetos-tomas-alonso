let personas = [
  { nombre: "Ana", edad: "28" },
  { nombre: "María", edad: "24" },
  { nombre: "José", edad: "31" }
];

// La edad viene como string, así que la pasamos a número antes de comparar
let personasConMasDe27 = personas.filter(persona => Number(persona.edad) > 27);

console.log(personasConMasDe27);
// [{ nombre: "Ana", edad: "28" }, { nombre: "José", edad: "31" }]

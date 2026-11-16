let personas = [
  { nombre: "Alba", edad: 15 },
  { nombre: "Estrella", edad: 30 },
  { nombre: "Belen", edad: 20 },
  { nombre: "Santiago", edad: 4 },
  { nombre: "Katherine", edad: 55 }
];

// Ordenamos de menor a mayor edad
personas.sort((a, b) => a.edad - b.edad);

// Agregamos la propiedad posicion según el lugar que quedó cada una
personas.forEach((persona, indice) => {
  persona.posicion = indice;
});

console.log(personas);

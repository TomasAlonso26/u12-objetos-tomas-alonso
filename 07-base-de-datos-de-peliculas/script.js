let peliculas = [
  { titulo: "Búsqueda implacable", rating: 5, loHasVisto: true },
  { titulo: "Norbit", rating: 3, loHasVisto: false },
  { titulo: "Mini espías", rating: 2, loHasVisto: true },
  { titulo: "La vida es bella", rating: 5, loHasVisto: false }
];

for (let i = 0; i < peliculas.length; i++) {
  let pelicula = peliculas[i];
  let visto = pelicula.loHasVisto ? "Viste" : "No viste";
  console.log(`${visto} "${pelicula.titulo}" - ${pelicula.rating} estrellas`);
}

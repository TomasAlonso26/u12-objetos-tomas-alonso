let actoresVocales = [];
let actoresPrincipales = ["Tom Hanks", "Johnny Depp", "Elizabeth Taylor", "Morgan Freeman", "Jennifer Aniston", "Meryl Streep", "Natalie Portman", "Ashton Kutcher"];

let peliculas = [];
let actoresPrincipalesPorPelicula = {
  "Titanic": "Leonardo DiCaprio",
  "El Padrino": "Al Pacino",
  "Matrix": "Keanu Reeves",
  "Iron Man": "Robert Downey Jr",
  "Soy leyenda": "Will Smith",
  "Bastardos sin gloria": "Brad Pitt"
};

const vocales = "aeiouAEIOU";

// 1. Actores cuyo nombre o apellido empieza con vocal
actoresPrincipales.forEach(actor => {
  let palabras = actor.split(" ");
  let empiezaConVocal = palabras.some(palabra => vocales.includes(palabra[0]));
  if (empiezaConVocal) {
    actoresVocales.push(actor);
  }
});
console.log(actoresVocales); // ["Elizabeth Taylor", "Jennifer Aniston", "Ashton Kutcher"]

// 2. Agregamos los actores del objeto a actoresPrincipales
for (let pelicula in actoresPrincipalesPorPelicula) {
  actoresPrincipales.push(actoresPrincipalesPorPelicula[pelicula]);
}
console.log(actoresPrincipales);

// 3. Agregamos los nombres de las películas a peliculas
for (let pelicula in actoresPrincipalesPorPelicula) {
  peliculas.push(pelicula);
}
console.log(peliculas);

// 4 y 5. Objeto con el actor como clave y la película como valor
let peliculaPorActor = {};
for (let pelicula in actoresPrincipalesPorPelicula) {
  let actor = actoresPrincipalesPorPelicula[pelicula];
  peliculaPorActor[actor] = pelicula;
}
console.log(peliculaPorActor);

// 6. Versión que admite más de una película por actor
let peliculasPorActor = {};
function agregarPelicula(actor, pelicula) {
  if (peliculasPorActor[actor] === undefined) {
    peliculasPorActor[actor] = [];
  }
  peliculasPorActor[actor].push(pelicula);
}

for (let pelicula in actoresPrincipalesPorPelicula) {
  agregarPelicula(actoresPrincipalesPorPelicula[pelicula], pelicula);
}
agregarPelicula("Leonardo DiCaprio", "El origen");
agregarPelicula("Keanu Reeves", "John Wick");

console.log(peliculasPorActor);

// Parte 1: Crear mi objeto
let nave = {
  tipoDeNave: "Espacial",
  pais: "Argentina",
  cantidadDeTripulantes: 3,
  tripulantes: ["Tomas", "Martina", "Lucas"],
  estado: "Usada",
  despegar: function () {
    console.log("🚀 ¡Todo listo para el despegue! 👍\nOh no ... 😱 ¡algo se rompió!");
    alert("🔥 ¡BOOOOOOM! 🔥");
  }
};

// Parte 2: Acceso a los valores
console.log(nave.pais); // Dot notation
console.log(nave["tipoDeNave"]); // Bracket notation
// Sí se puede con dot notation porque la propiedad está en camelCase, sin espacios
console.log(nave.cantidadDeTripulantes);

// Para activar la función hay que agregar los paréntesis
nave["despegar"]();

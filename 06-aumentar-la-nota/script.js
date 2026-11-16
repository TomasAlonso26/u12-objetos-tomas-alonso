let estudiantes = [
  { Estudiante: "Juan", nota: 6 },
  { Estudiante: "Mario", nota: 8 },
  { Estudiante: "Julia", nota: 10 },
  { Estudiante: "Sofia", nota: 2 }
];

estudiantes.forEach(estudiante => {
  if (estudiante.nota > 5) {
    estudiante.nota += 2;
    // La nota no puede superar el 10
    if (estudiante.nota > 10) {
      estudiante.nota = 10;
    }
  }
});

console.log(estudiantes);
// Juan 8, Mario 10, Julia 10, Sofia 2

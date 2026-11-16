let autos = [
  {
    marca: "Citroen",
    modelo: "C3",
    año: 2013,
    dueño: "Juan",
    color: {
      capot: "gris",
      puertas: "negro"
    },
    dueñosAnteriores: [] // Lo compró 0KM
  },
  {
    marca: "Honda",
    modelo: "Fit",
    año: 2016,
    dueño: "Santiago",
    color: {
      capot: "rojo",
      puertas: "rojo"
    },
    dueñosAnteriores: ["Jorge", "Iván"]
  }
];

// Santiago le compra el auto a Juan y le pinta el capot a negro
autos[0].dueño = "Santiago";
autos[0].dueñosAnteriores.push("Juan");
autos[0].color.capot = "negro";

console.log(autos[0]);

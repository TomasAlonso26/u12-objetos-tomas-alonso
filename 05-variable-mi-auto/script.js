let miAuto = {};

miAuto.marca = "Toyota";
miAuto.año = 2022;
miAuto.nuevo = false;

let propertyKey = "modelo";
miAuto[propertyKey] = "Corolla";

let anotherPropertyKey = "precio";
miAuto[anotherPropertyKey] = 23920;

let nextProperty = "color";
miAuto[nextProperty] = "gris";

for (let key in miAuto) {
  console.log(key + ": " + miAuto[key]);
}

// Para pensar...
console.log(miAuto[propertyKey]); // "Corolla"
console.log(miAuto["modelo"]); // "Corolla" (es la misma propiedad)
console.log(miAuto[nextProperty]); // "gris"
console.log(miAuto["color"]); // "gris"

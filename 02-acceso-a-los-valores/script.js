// Ejercicio 1
let objeto_demo = {
  uno: 1,
  dos: 2,
  tres: 3
};
let uno = "tres";

console.log(objeto_demo["dos"]); // 2 -> busca la propiedad "dos"
console.log(objeto_demo[uno]); // 3 -> uno es una variable que vale "tres"
console.log(objeto_demo["uno"]); // 1 -> busca la propiedad "uno"

// Ejercicio 2
let capitales = {
  Argentina: "Buenos Aires",
  Uruguay: "Montevideo"
};
let lugar = "Uruguay";

console.log(capitales["lugar"]); // undefined -> no existe la propiedad "lugar"
console.log(capitales.lugar); // undefined -> dot notation también busca la propiedad "lugar"
console.log(capitales[lugar]); // "Montevideo" -> usa el valor de la variable lugar
console.log(capitales["Argentina"]); // "Buenos Aires"
console.log(capitales.Argentina); // "Buenos Aires"
// capitales[Argentina] tira error: Argentina sin comillas es una variable que no existe

let numeros = [2, 4, 5, 37, 0];

// 1. Creamos el objeto vacío
let numeros_duplicados = {};

// 2. Recorremos el arreglo con un for clásico
for (let i = 0; i < numeros.length; i++) {
  // 3. Cada número es la propiedad, y su valor es el doble
  numeros_duplicados[numeros[i]] = numeros[i] * 2;
}

console.log(numeros_duplicados); // { 0: 0, 2: 4, 4: 8, 5: 10, 37: 74 }

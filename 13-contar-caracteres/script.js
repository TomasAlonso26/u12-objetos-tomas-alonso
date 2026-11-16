function contarCaracteres(cadena) {
  let conteo = {};
  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i];
    if (conteo[caracter] === undefined) {
      conteo[caracter] = 1;
    } else {
      conteo[caracter]++;
    }
  }
  return conteo;
}

let result1 = contarCaracteres("banana");
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

let result2 = contarCaracteres("");
console.log('should log "{}":', result2);

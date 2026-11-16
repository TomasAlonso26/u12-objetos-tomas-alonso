let ecommerce = [
  { nombre: "Samsung TV", precio: 6000, articulos: 10 },
  { nombre: "DELL notebook", precio: 4000, articulos: 30 },
  { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
  { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
  { nombre: "Teclado logitech", precio: 3000, articulos: 5 }
];

function totalArticulos(productos) {
  let resultado = [];
  productos.forEach(producto => {
    let total = {};
    total[producto.nombre] = producto.precio * producto.articulos;
    resultado.push(total);
  });
  return resultado;
}

let totales = totalArticulos(ecommerce);
console.log(totales);
totales.forEach(total => console.log(total));
// {Samsung TV: 60000}, {DELL notebook: 120000}, {Auriculares Sony: 22500},
// {Monitor Philips: 240000}, {Teclado logitech: 15000}

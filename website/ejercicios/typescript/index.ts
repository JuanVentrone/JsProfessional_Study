 
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  azul= 'Azul',
  Amarillo= 'Amarillo'
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());

// function add(a:number, b:number){
//   return a+b
// }
// const sum=add(2,3)
// console.log(sum)
// let nombre= "Juan"
// let saludo= `Me llamo ${nombre}`;
// console.log(saludo)
// let colorFa:Color =Color.Amarillo;
// console.log(`Mi Color Favorito es ${colorFa}`)
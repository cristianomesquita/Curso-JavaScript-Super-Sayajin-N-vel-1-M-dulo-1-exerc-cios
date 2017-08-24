const inverse = x => x * (-1); // Na matemática um valor multiplicado por menos 1 tem seu 
//sinal invertido

const add = (x, y) => x + y;
console.log(add(5, 2)); //result: 7

const subtract = (x, y) => add( x, inverse(y));
console.log(subtract(5, 2)); //result: 3


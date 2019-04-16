var libreria = require('./funcion')

var args = process.argv.slice(2);
console.log(args);

var res = libreria.suma(args[0], args[1])
// UNO
console.log(res);

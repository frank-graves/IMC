const modulo = require("./IMC");

const pesoPrueba = 83;
const alturaPrueba = 1.70;

console.log("");
console.log("IMC Calculator v3");

const userIMCv3 = modulo.imc3(pesoPrueba, alturaPrueba);
console.log("Tu IMCv3 es: " + userIMCv3.toFixed(2));
console.log("Clasificación: " + modulo.cIMC(userIMCv3));

console.log("");
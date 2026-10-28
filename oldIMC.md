function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function calcularIMCv2(peso, altura) {
  if (peso === undefined || altura === undefined) {
    console.log("Error, es obligatorio el peso y la altura");
    return;
  }
  
  if (typeof peso !== "number" || typeof altura !== "number") {
    console.log("Error, peso o altura inválido. Ingrese un valor numérico adecuado");
    return;
  }
  return peso / (altura * altura);
}

moduleexports.imc = calcularIMC;
moduleexports.imc2 = calcularIMCv2;
moduleexports.imc3 = calcularIMCv3;
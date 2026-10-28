function calcularIMCv3(peso, altura) {
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

function clasificadorIMC(imc) {
  if (typeof imc !== "number" || Number.isNaN(imc)) {
    return "Error";
  }

  switch (true) {
    case imc < 18.5:
      return "Bajo Peso";
    case imc < 24.9:
      return "Peso normal o saludable";
    case imc < 29.9:
      return "Sobrepeso";
    case imc >= 30:
      return "Obeso";
  }
}

module.exports = {
  imc3: calcularIMCv3,
  cIMC: clasificadorIMC,
};
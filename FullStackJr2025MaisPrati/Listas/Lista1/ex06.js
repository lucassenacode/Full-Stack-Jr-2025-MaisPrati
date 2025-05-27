import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Analisador de Triângulos ---");
  console.log("Este programa solicita as medidas dos três lados, verifica se formam um triângulo válido e, em caso afirmativo, o classifica.");
};

const getPositiveFloatInput = (promptMessage) => {
  let value;
  while (true) {
    const userInput = prompt(promptMessage);
    const sanitizedInput = userInput.replace(',', '.');
    value = parseFloat(sanitizedInput);

    if (!isNaN(value) && value > 0) {
      break;
    } else if (!isNaN(value) && value <= 0) {
      console.log("Valor inválido! A medida do lado deve ser positiva e maior que zero. Tente novamente.");
    } else {
      console.log("Entrada inválida! Por favor, digite um número válido.");
    }
  }
  return value;
};

const analyzeTriangle = () => {
  statements();

  console.log("\nDigite as medidas dos lados do triângulo:");
  const sideA = getPositiveFloatInput("Lado A: ");
  if (sideA === null) {
    console.log("Análise cancelada.");
    prompt("Pressione ENTER para continuar...");
    return;
  }

  const sideB = getPositiveFloatInput("Lado B: ");
  if (sideB === null) {
    console.log("Análise cancelada.");
    prompt("Pressione ENTER para continuar...");
    return;
  }

  const sideC = getPositiveFloatInput("Lado C: ");
  if (sideC === null) {
    console.log("Análise cancelada.");
    prompt("Pressione ENTER para continuar...");
    return;
  }

  if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
    console.log("\nOs lados fornecidos formam um triângulo!");

    let triangleType = "";
    if (sideA === sideB && sideB === sideC) {
      triangleType = "Equilátero (todos os lados iguais)";
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
      triangleType = "Isósceles (dois lados iguais)";
    } else {
      triangleType = "Escaleno (todos os lados diferentes)";
    }
    console.log(`Tipo de triângulo: ${triangleType}.`);

  } else {
    console.log("\nOs lados fornecidos NÃO formam um triângulo.");
    console.log("Lembre-se: para formar um triângulo, a medida de qualquer um dos lados deve ser menor que a soma das medidas dos outros dois.");
  }

  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default analyzeTriangle;
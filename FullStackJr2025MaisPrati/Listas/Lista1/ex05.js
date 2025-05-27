import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Calculadora de IMC ---");
  console.log("Este programa solicita seu peso (em kg) e altura (em metros) para calcular o IMC e informar sua categoria de peso.");
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
      console.log("Valor inválido! O número deve ser positivo e maior que zero. Tente novamente.");
    } else {
      console.log("Entrada inválida! Por favor, digite um número válido.");
    }
  }
  return value;
};

const calculateAndClassifyIMC = () => {
  statements();

  const weight = getPositiveFloatInput("Digite seu peso em kg (ex: 70.5): ");
 
  const height = getPositiveFloatInput("Digite sua altura em metros (ex: 1.75): ");

  const imc = weight / (height * height);
  const formattedIMC = imc.toFixed(2);

  console.log(`\nSeu IMC calculado é: ${formattedIMC}`);

  let category = "";
  if (imc < 18) {
    category = "Baixo peso";
  } else if (imc < 25) {
    category = "Peso normal";
  } else if (imc < 30) {
    category = "Sobrepeso";
  } else {
    category = "Obesidade";
  }

  console.log(`Sua categoria de peso é: ${category}.`);

  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default calculateAndClassifyIMC;

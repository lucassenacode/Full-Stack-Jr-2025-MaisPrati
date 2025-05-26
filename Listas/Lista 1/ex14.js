import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Calculadora de Fatorial ---");
  console.log("Este programa solicita um número inteiro não negativo e calcula o seu fatorial.");
};


const getNonNegativeIntegerInput = (promptMessage) => {
  let number;
  while (true) {
    const userInput = prompt(promptMessage);
  

    const parsedFloat = parseFloat(userInput ? userInput.replace(',', '.') : "");
    const parsedInt = parseInt(userInput ? userInput.replace(',', '.') : "");

   
    if (!isNaN(parsedFloat) && parsedFloat === parsedInt && parsedInt >= 0) {
      number = parsedInt;
      break;
    } else if (!isNaN(parsedFloat) && parsedFloat === parsedInt && parsedInt < 0) {
      console.log("Valor inválido! O número para fatorial não pode ser negativo. Tente novamente.");
    }
    else {
      console.log("Valor inválido! Por favor, digite um número inteiro não negativo (ex: 0, 1, 5).");
    }
  }
  return number;
};

const calculateFactorial = () => {
  statements();

  const number = getNonNegativeIntegerInput("Digite um número inteiro não negativo para calcular o fatorial: ");

  let factorialResult = 1;

  if (number === 0) {
    factorialResult = 1;
  } else {
    for (let i = number; i >= 1; i--) {
      factorialResult *= i;
    }
  }

  console.log(`\nO fatorial de ${number} (ou ${number}!) é: ${factorialResult}`);
  console.log("-------------------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default calculateFactorial;
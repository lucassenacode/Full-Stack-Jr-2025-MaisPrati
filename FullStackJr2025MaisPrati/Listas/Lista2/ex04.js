import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Calculadora de Fatorial Recursivo ---");
  console.log("Este programa solicita um número inteiro e calcula seu fatorial de forma recursiva.");
  console.log("Nota: Números negativos não têm fatorial definido e 0! = 1.");
};

const getIntegerInput = (promptMessage) => {
  let number;
  while (true) {
    const userInput = prompt(promptMessage);
    if (userInput === null) {
      console.log("Entrada cancelada.");
      return null; 
    }
    
    const parsedFloat = parseFloat(userInput.replace(',', '.'));
    const parsedInt = parseInt(userInput.replace(',', '.'));

    if (!isNaN(parsedFloat) && parsedFloat === parsedInt) {
      number = parsedInt;
      break;
    } else {
      console.log("Valor inválido! Por favor, digite um número inteiro (ex: 5, 0, -2).");
    }
  }
  return number;
};

function recursiveFactorial(n) {
  if (n < 0) {
    
    return NaN; 
  }
  if (n === 0) {
   
    return 1;
  } else {
    
    const resultOfPreviousStep = recursiveFactorial(n - 1);
    
    if (isNaN(resultOfPreviousStep)) {
        return NaN;
    }
    return n * resultOfPreviousStep;
  }
}

const calculateRecursiveFactorial = () => {
  statements();

  const number = getIntegerInput("Digite um número inteiro para calcular o fatorial: ");

  if (number === null) {
    console.log("Cálculo do fatorial cancelado.");
    console.log("----------------------------------------");
    prompt("Pressione ENTER para continuar...");
    return;
  }

  const result = recursiveFactorial(number);

  if (isNaN(result)) {
    console.log("\nErro: Fatorial não é definido para números negativos.");
  } else {
    console.log(`\nO fatorial de ${number} (${number}!) é: ${result}`);
  }

  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default calculateRecursiveFactorial;
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Calculadora de Média ---");
  console.log("Este programa recebe números decimais até que você digite 0. Ao final, calcula a média aritmética dos números fornecidos (excluindo o 0).");
};


const getDecimalInput = (promptMessage) => {
  let number;
  while (true) {
    const userInput = prompt(promptMessage);
  
    
    const sanitizedInput = userInput ? userInput.replace(',', '.') : ""; 
    number = parseFloat(sanitizedInput);

    if (!isNaN(number)) { 
      break; 
    } else {
      console.log("Entrada inválida! Por favor, digite um número decimal válido (ex: 3.14, -2.5, 0).");
    }
  }
  return number;
};

const calculateAverageUntilZero = () => {
  statements();

  let sumOfNumbers = 0;
  let countOfNumbers = 0;
  let currentNumber;

  console.log("\nDigite os números decimais um por um.");
  console.log("Insira '0' (zero) para finalizar a entrada de números e calcular a média.");

  while (true) {

    currentNumber = getDecimalInput(`Digite o ${countOfNumbers + 1}º número (ou 0 para parar): `);

    if (currentNumber === 0) {
      break;
    }

 
    sumOfNumbers += currentNumber;
    countOfNumbers++;
  }

  console.log("\n--- Resultado da Média ---");
  if (countOfNumbers > 0) {
    const average = sumOfNumbers / countOfNumbers;
    console.log(`Foram inseridos ${countOfNumbers} número(s) (excluindo o zero final).`);
    console.log(`A soma dos números é: ${sumOfNumbers.toFixed(2)}`);
    console.log(`A média aritmética dos números é: ${average.toFixed(2)}`);
  } else {
    console.log("Nenhum número foi inserido (além do 0 para finalizar). A média não pode ser calculada.");
  }

  console.log("----------------------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default calculateAverageUntilZero;
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Ordenador de Dois Números ---");
  console.log("Este programa solicita dois números diferentes e os exibe em ordem crescente.");
};

const getNumericInput = (promptMessage, valueToAvoid = null) => {
  let number;
  while (true) {
    const userInput = prompt(promptMessage);
    
    const sanitizedInput = userInput ? userInput.replace(',', '.') : ""; 
    number = parseFloat(sanitizedInput);

    if (!isNaN(number)) { 
      if (valueToAvoid !== null && number === valueToAvoid) {
        console.log(`Valor inválido! O número deve ser diferente de ${valueToAvoid}. Tente novamente.`);
      } else {
        break; 
      }
    } else {
      console.log("Entrada inválida! Por favor, digite um número válido.");
    }
  }
  return number;
};

const orderTwoNumbers = () => {
  statements();

  console.log("\nPor favor, insira o primeiro valor:");
  const number1 = getNumericInput("Valor 1: ");

  console.log("\nPor favor, insira o segundo valor (diferente do primeiro):");
  const number2 = getNumericInput(`Valor 2 (diferente de ${number1}): `, number1);

  console.log("\n--- Números em Ordem Crescente ---");
  if (number1 < number2) {
    console.log(`${number1}, ${number2}`);
  } else {
   
    console.log(`${number2}, ${number1}`);
  }

  console.log("----------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default orderTwoNumbers;
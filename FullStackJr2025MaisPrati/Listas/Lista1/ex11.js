import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Somar de Cinco Números ---");
  console.log("Este programa solicita cinco números ao usuário e, ao final, exibe a soma total deles.");
};

const getNumericInput = (promptMessage) => {
  let number;
  while (true) {
    const userInput = prompt(promptMessage);
   
    const sanitizedInput = userInput ? userInput.replace(',', '.') : ""; 
    number = parseFloat(sanitizedInput);

    if (!isNaN(number)) { 
      break; 
    }
  }
  return number;
};

const sumFiveNumbers = () => {
  statements();

  let totalSum = 0;
  console.log("\nPor favor, digite 5 números.");

  
  for (let i = 1; i <= 5; i++) {
   
    const currentNumber = getNumericInput(`Digite o ${i}º número: `);
    totalSum += currentNumber; 
  }

  console.log(`\nA soma total dos 5 números digitados é: ${totalSum}`);
  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default sumFiveNumbers;
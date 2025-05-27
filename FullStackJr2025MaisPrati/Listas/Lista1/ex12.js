import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Gerador de Tabuada ---");
  console.log("Este programa solicita um número e exibe a sua tabuada de multiplicação (do 1 ao 10).");
};

const getNumericInput = (promptMessage) => {
  let number;
  while (true) {
    const userInput = prompt(promptMessage);
    
    const sanitizedInput = userInput ? userInput.replace(',', '.') : ""; 
    number = parseFloat(sanitizedInput);

    if (!isNaN(number)) {
      break; 
    } else {
      console.log("Entrada inválida! Por favor, digite um número válido.");
    }
  }
  return number;
};

const displayMultiplicationTable = () => {
  statements();

  const numberForTable = getNumericInput("Digite um número para ver a sua tabuada: ");

  console.log(`\n--- Tabuada do ${numberForTable} ---`);

  
  for (let i = 1; i <= 10; i++) {
    const result = numberForTable * i;
    console.log(`${numberForTable} x ${i} = ${result}`);
  }

  console.log("----------------------"); 
  prompt("Pressione ENTER para continuar...");
};

export default displayMultiplicationTable;
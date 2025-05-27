import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Repetidor de Número ---");
  console.log("Este programa lê um número inteiro e o escreve na tela 10 vezes.");
};


const getIntegerInput = (promptMessage) => {
  let number;
  while (true) {
    const userInput = prompt(promptMessage);

    const parsedFloat = parseFloat(userInput ? userInput.replace(',', '.') : "");
    const parsedInt = parseInt(userInput ? userInput.replace(',', '.') : "");   

  
    if (!isNaN(parsedFloat) && parsedFloat === parsedInt) {
      number = parsedInt;
      break;
    } else {
      console.log("Valor inválido! Por favor, digite um número inteiro (ex: 7, -3, 0).");
    }
  }
  return number;
};

const repeatNumberTenTimes = () => {
  statements();

  const numberToRepeat = getIntegerInput("Digite um número inteiro: ");

  console.log(`\nO número ${numberToRepeat} será impresso 10 vezes:`);

  for (let i = 0; i < 10; i++) {
    console.log(numberToRepeat);
  }

  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default repeatNumberTenTimes;
import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true }); 
const statements = () => {
  console.log("\n--- Calculadora de Custo de Maçãs ---");
  console.log("Este programa calcula o valor total de uma compra de maçãs, aplicando desconto para compras a partir de uma dúzia.");
};
const getNonNegativeIntegerInput = (promptMessage) => {
  let value;
  while (true) {
    const userInput = prompt(promptMessage);
    value = parseInt(userInput);

    if (!isNaN(value) && value >= 0 && Number.isInteger(parseFloat(userInput))) { 

      break; 
    } else if (!isNaN(value) && value < 0) {
        console.log("Valor inválido! O número de maçãs não pode ser negativo. Tente novamente.");
    }
    else {
      console.log("Valor inválido! Por favor, digite um número inteiro não negativo de maçãs.");
    }
  }
  return value;
};


const calculateAppleCost = () => {
  statements();

  const numberOfApples = getNonNegativeIntegerInput("Digite o número de maçãs compradas: ");

  let pricePerApple;
  if (numberOfApples < 12) {
    pricePerApple = 0.30;
  } else {
    pricePerApple = 0.25;
  }

  const totalCost = numberOfApples * pricePerApple;

  console.log(`\nNúmero de maçãs compradas: ${numberOfApples}`);
  if (numberOfApples < 12 && numberOfApples > 0) {
    console.log(`Preço por maçã: R$ ${pricePerApple.toFixed(2)} (menos de uma dúzia)`);
  } else if (numberOfApples >=12) {
    console.log(`Preço por maçã: R$ ${pricePerApple.toFixed(2)} (uma dúzia ou mais)`);
  }


  console.log(`Valor total da compra: R$ ${totalCost.toFixed(2)}`);
  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default calculateAppleCost;
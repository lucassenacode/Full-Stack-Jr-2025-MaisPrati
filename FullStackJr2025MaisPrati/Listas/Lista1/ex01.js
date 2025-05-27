import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Verificador de Número Par ou Ímpar ---"); 
  console.log("Este programa solicita um número inteiro e informa se ele é par ou ímpar."); 
};

const getNumber = () => {
  let convertedNumber;
  while (true) {
    const userInput = prompt("Digite um número inteiro: ");
    convertedNumber = parseInt(userInput);
    if (!isNaN(convertedNumber)) {
      break;
    }
    console.log("Valor inválido! Por favor, digite um número inteiro válido.");
  }
  return convertedNumber;
};

const checkEvenOdd = () => {
  statements();
  const number = getNumber();

  if (number % 2 === 0) {
    console.log(`O número ${number} é PAR.`);
  } else {
    console.log(`O número ${number} é ÍMPAR.`);
  }
  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default checkEvenOdd;
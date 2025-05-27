import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Classificador de Faixa Etária ---");
  console.log("Este programa solicita uma idade e informa a categoria correspondente (criança, adolescente, adulto ou idoso).");
};

const getAge = () => {
  let convertedAge;
  while (true) {
    const userInput = prompt("Digite a idade a ser verificada (deve ser um valor não negativo): ");

    convertedAge = parseInt(userInput);
    
    if (!isNaN(convertedAge) && convertedAge >= 0) {
      break; 
    } else if (!isNaN(convertedAge) && convertedAge < 0) {
      
      console.log("Idade inválida! A idade não pode ser um número negativo. Tente novamente.");
    } else {
      
      console.log("Valor inválido! Por favor, digite um número inteiro válido.");
    }
  }
  return convertedAge;
};

const checkAge = () => {
  statements();
  const age = getAge();

  if (age >= 70) {
    console.log(`A idade ${age} anos é considerada idoso.`);
  } else if (age >= 18) { 
    console.log(`A idade ${age} anos é considerada adulto.`);
  } else if (age >= 12) { 
    console.log(`A idade ${age} anos é considerada adolescente.`);
  } else { 
    console.log(`A idade ${age} anos é considerada criança.`);
  }
  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default checkAge;
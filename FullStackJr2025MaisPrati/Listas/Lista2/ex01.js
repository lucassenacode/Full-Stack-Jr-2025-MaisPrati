import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Validador de Datas ---");
  console.log("Este programa solicita um dia, mes e ano e verifica se formam uma data válida, considerando anos bissextos.");
};

const getPositiveIntegerInput = (promptMessage, upperLimit = null) => {
  let number;
  while (true) {
    const userInput = prompt(promptMessage);
    const parsedNumber = parseInt(userInput);

    if (!isNaN(parsedNumber) && parsedNumber > 0 && (upperLimit === null || parsedNumber <= upperLimit)) {
      number = parsedNumber;
      break;
    } else if (upperLimit !== null && parsedNumber > upperLimit) {
      console.log(`Valor inválido! O número deve ser entre 1 e ${upperLimit}. Tente novamente.`);
    } else if (parsedNumber <= 0) {
      console.log("Valor inválido! O número deve ser positivo. Tente novamente.");
    }
    else {
      console.log("Entrada inválida! Por favor, digite um número inteiro válido.");
    }
  }
  return number;
};

const isLeapYear = (year) => {
  
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

const validateDateAndDisplay = () => {
  statements();

  const day = getPositiveIntegerInput("Digite o dia (1-31): ", 31);
  const month = getPositiveIntegerInput("Digite o mês (1-12): ", 12);
  const year = getPositiveIntegerInput("Digite o ano (ex: 2024): "); 

  let isValidDate = true;
  let daysInMonth;

  if (month < 1 || month > 12 || day < 1 || year < 1) { 
    isValidDate = false;
  } else {
    switch (month) {
      case 1: 
      case 3: 
      case 5: 
      case 7: 
      case 8: 
      case 10: 
      case 12: 
        daysInMonth = 31;
        break;
      case 4: 
      case 6: 
      case 9: 
      case 11: 
        daysInMonth = 30;
        break;
      case 2: 
        if (isLeapYear(year)) {
          daysInMonth = 29;
        } else {
          daysInMonth = 28;
        }
        break;
      default:
        isValidDate = false;
        break;
    }

    if (isValidDate && day > daysInMonth) {
      isValidDate = false;
    }
  }

  console.log(`\nA data informada: ${day}/${month}/${year}`);
  if (isValidDate) {
    console.log("É uma data VÁLIDA.");
  } else {
    console.log("É uma data INVÁLIDA.");
  }

  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default validateDateAndDisplay;

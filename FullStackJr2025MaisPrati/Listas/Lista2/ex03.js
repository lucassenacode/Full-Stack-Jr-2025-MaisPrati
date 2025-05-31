import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Extrator de Palavras Únicas ---");
  console.log("Este programa solicita uma frase e exibe uma lista contendo apenas as palavras unicas dessa frase (ignorando maiúsculas/minúsculas).");
};

const getStringInput = (promptMessage) => {
  let userInput;
  while (true) {
    userInput = prompt(promptMessage);
    if (userInput === null) { 
      console.log("Entrada cancelada.");
      return null; 
    }
    
    break; 
  }
  return userInput;
};

const extractUniqueWords = () => {
  statements();

  const inputText = getStringInput("Digite uma frase: ");

  if (inputText === null) {
    console.log("Operação cancelada.");
    console.log("----------------------------------------");
    prompt("Pressione ENTER para continuar...");
    return;
  }

  const uniqueWords = [];

  if (inputText.trim() === "") {
    console.log("\nNenhuma palavra foi inserida.");
  } else {
  
    const words = inputText.toLowerCase().trim().split(/\s+/);

    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];

    
      if (currentWord === "") {
        continue;
      }

      let isAlreadyPresent = false;
      
      for (let j = 0; j < uniqueWords.length; j++) {
        if (uniqueWords[j] === currentWord) {
          isAlreadyPresent = true;
          break; 
        }
      }

      
      if (!isAlreadyPresent) {
        uniqueWords.push(currentWord);
      }
    }
  }

  console.log("\nPalavras unicas encontradas:");
  console.log(uniqueWords); 
  

  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default extractUniqueWords;
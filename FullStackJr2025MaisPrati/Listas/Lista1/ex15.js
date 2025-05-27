import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true }); 

const statements = () => {
  console.log("\n--- Gerador da Sequência de Fibonacci ---");
  console.log("Este programa exibe os 10 primeiros números da sequência de Fibonacci.");
};

const generateFirstTenFibonacci = () => {
  statements();
  console.log("\nOs 10 primeiros números da sequência de Fibonacci são:");

  let termA = 0; 
  let termB = 1; 
  const numberOfTermsToGenerate = 10;

  if (numberOfTermsToGenerate <= 0) {
    console.log("O número de termos a serem gerados deve ser positivo.");
  } else {
    let fibonacciSequenceOutput = ""; 

    for (let i = 0; i < numberOfTermsToGenerate; i++) {
      if (i === 0) {
        
        fibonacciSequenceOutput += termA;
      } else {
       
        fibonacciSequenceOutput += ", " + termA;
      }

      
      const nextTerm = termA + termB;
      termA = termB;
      termB = nextTerm;
    }
    console.log(fibonacciSequenceOutput); 
  }

  console.log("\n----------------------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default generateFirstTenFibonacci;
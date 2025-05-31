import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Demonstração da Função Memoize ---");
  console.log("Este programa implementa e demonstra uma função 'memoize'.");
  console.log("A função 'memoized' armazena os resultados de chamadas anteriores.");
  console.log("Se chamada novamente com os mesmos argumentos, ela retorna o resultado do cache instantaneamente, sem reexecutar a lógica original.");
  console.log("Observe os logs para ver quando a função original é de fato executada versus quando o cache é usado.");
};


function memoize(fn) {
  const cache = {}; 


  return function(...args) {
    
    const key = JSON.stringify(args);

    
    if (cache[key]) {
      console.log(`⚡ (CACHE HIT) Buscando resultado para argumentos: ${key}`);
      return cache[key];
    } else {
      console.log(`🐌 (CACHE MISS) Calculando resultado para argumentos: ${key}`);
      
      const result = fn.apply(this, args); 
      cache[key] = result; 
      return result;
    }
  };
}


const demonstrateMemoization = () => {
  statements();

  
  const complexCalculation = (a, b) => {
    console.log(">>> Executando 'complexCalculation' (simulando cálculo intensivo)...");
    
    return a + b;
  };

  const memoizedCalculation = memoize(complexCalculation);

  console.log("\n--- Iniciando Demonstração ---");

  console.log("\nChamada 1 (deve calcular):");
  let result1 = memoizedCalculation(5, 3); 
  console.log("Resultado:", result1);

  console.log("\nChamada 2 (mesmos argumentos, deve usar cache):");
  let result2 = memoizedCalculation(5, 3); 
  console.log("Resultado:", result2);

  console.log("\nChamada 3 (novos argumentos, deve calcular):");
  let result3 = memoizedCalculation(10, 20); 
  console.log("Resultado:", result3);

  console.log("\nChamada 4 (argumentos da Chamada 3, deve usar cache):");
  let result4 = memoizedCalculation(10, 20); 
  console.log("Resultado:", result4);

  console.log("\nChamada 5 (argumentos da Chamada 1, ainda em cache):");
  let result5 = memoizedCalculation(5, 3); 
  console.log("Resultado:", result5);
  
  console.log("\nChamada 6 (ordem de argumentos diferente, nova chave no cache se a função original não for comutativa na sua lógica interna, mas a soma é):");
  let result6 = memoizedCalculation(3, 5); 
                                           
  console.log("Resultado:", result6);


  console.log("\n-------------------------------------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default demonstrateMemoization;
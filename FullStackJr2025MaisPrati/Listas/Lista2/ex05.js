import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Demonstração da Função Debounce ---");
  console.log("Este programa implementa e demonstra uma função 'debounce'.");
  console.log("A função 'debounced' só executará após um certo tempo (delay) sem novas chamadas.");
  console.log("Observe os logs no console para ver o comportamento.");
};

function debounce(fn, delay) {
  let timeoutId; 

  
  return function(...args) {
    
    const context = this;

    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    
    timeoutId = setTimeout(() => {
      fn.apply(context, args); 
    }, delay);
  };
}


const demonstrateDebounce = () => {
  statements();

  
  let executionCount = 0;
  const myTask = (message) => {
    executionCount++;
    console.log(`\n✅ Tarefa Executada! (Execução #${executionCount})`);
    console.log(`   Mensagem: "${message}"`);
    console.log(`   Timestamp: ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 } )}`);
  };

  
  const debouncedTask = debounce(myTask, 1000);

  console.log("\n--- Iniciando Demonstração ---");
  console.log("Chamando a tarefa debounced várias vezes em rápida sucessão...");
  console.log("(Esperado: apenas a última chamada dentro de 1s deve ser executada)");

  debouncedTask("Chamada Rápida 1"); 
  setTimeout(() => debouncedTask("Chamada Rápida 2"), 200); 
  setTimeout(() => debouncedTask("Chamada Rápida 3 (FINAL da rajada 1)"), 500); 

  
  console.log("\nAgendando outra chamada após uma pausa maior...");
  setTimeout(() => {
    console.log("\n--- Rajada 2 (após pausa) ---");
    debouncedTask("Chamada Pós-Pausa 1"); 
  }, 2500); 

  setTimeout(() => {
    debouncedTask("Chamada Pós-Pausa 2 (FINAL da rajada 2)"); 
  }, 2800); 

  console.log("\nOs resultados da 'Tarefa Executada' aparecerão no console de forma assíncrona.");
  console.log("Aguarde alguns segundos para ver todas as execuções debounced.");
  console.log("-------------------------------------------------------------------");
  prompt("Pressione ENTER para continuar (as tarefas debounced continuarão executando em segundo plano se ainda estiverem pendentes)...");
};

export default demonstrateDebounce;
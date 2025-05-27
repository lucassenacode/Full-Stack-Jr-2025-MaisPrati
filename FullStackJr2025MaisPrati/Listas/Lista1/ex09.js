import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true }); 
const statements = () => {
  console.log("\n--- Contagem Regressiva ---");
  console.log("Este programa exibirá uma contagem regressiva de 10 até 1 no console.");
};

const countdownTimer = () => {
  statements();

  console.log("\nIniciando a contagem regressiva:");
  for (let count = 10; count >= 1; count--) {
    console.log(count);
  }

  console.log("FIM!"); 
  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default countdownTimer;
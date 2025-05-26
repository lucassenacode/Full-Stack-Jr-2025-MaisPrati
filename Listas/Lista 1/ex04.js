import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Menu Interativo Estilo Video Game ---");
  console.log("Este programa simula um menu com opções, como em um jogo.");
};

const displayMenu = () => {
  console.log("\n====== JOGO MAIS PRATI ======"); 
  console.log("||                         ||");
  console.log("||   1. Novo Jogo          ||");
  console.log("||   2. Carregar Jogo      ||");
  console.log("||   3. Opções             ||");
  console.log("||                         ||");
  console.log("||   0. Sair               ||");
  console.log("||                         ||");
  console.log("===========================");
  return prompt("Escolha uma opção: ");
};

const interactiveMenu = () => {
  statements();
  let keepMenuRunning = true;

  while (keepMenuRunning) {
    const choiceString = displayMenu();

    const choice = parseInt(choiceString);

    switch (choice) {
      case 1:
        console.log("\n>>> Iniciando Novo Jogo! <<<");
       
        prompt("Pressione ENTER para voltar ao menu...");
        break;
      case 2:
        console.log("\n>>> Carregando Jogo Salvo... <<<");
     
        prompt("Pressione ENTER para voltar ao menu...");
        break;
      case 3:
        console.log("\n>>> Configurando Opções... <<<");
      
        prompt("Pressione ENTER para voltar ao menu...");
        break;
      case 0:
        console.log("\n>>> Obrigado por jogar! Saindo... <<<");
        keepMenuRunning = false;
        break;
      default:
        if (isNaN(choice)) {
            console.log("\nEntrada inválida. Por favor, digite um número.");
        } else {
            console.log("\nOpção inválida. Por favor, escolha uma das opções do menu.");
        }
        prompt("Pressione ENTER para tentar novamente...");
        break;
    }
  }
  console.log("----------------------------------------");
};

export default interactiveMenu;
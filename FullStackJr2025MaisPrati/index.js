import PromptSync from "prompt-sync";
const prompt = PromptSync();

const listConfigurations = [
  { name: "Lista de Exercícios 1", path: "./Listas/Lista1/lista1.js" },
];


async function mainMenu() {
  let isMainMenuRunning = true;
  while (isMainMenuRunning) {
    console.clear();
    console.log("--- MENU PRINCIPAL DE EXERCÍCIOS ---");
    listConfigurations.forEach((listConfig, index) => {
      console.log(`${index + 1}. ${listConfig.name}`);
    });
    console.log("0. Sair do Programa");
    console.log("------------------------------------");

    const choiceString = prompt("Escolha uma lista (ou 0 para sair): ");

    if (choiceString === null) {
        isMainMenuRunning = false;
        break;
    }
    const choiceNumber = parseInt(choiceString);

    if (!isNaN(choiceNumber)) {
      if (choiceNumber === 0) {
        isMainMenuRunning = false;
      } else if (choiceNumber > 0 && choiceNumber <= listConfigurations.length) {
        const selectedList = listConfigurations[choiceNumber - 1];
        try {
          const listMenuModule = await import(selectedList.path);
          if (listMenuModule.default && typeof listMenuModule.default === 'function') {
            console.clear();
            await listMenuModule.default();
          } else {
            console.log(`Erro: O arquivo de menu ${selectedList.path} não exporta uma função padrão.`);
            prompt("Pressione ENTER para continuar...");
          }
        } catch (error) {
          console.error(`Erro ao carregar o menu da lista ${selectedList.name}: ${error}`);
          prompt("Pressione ENTER para continuar...");
        }
      } else {
        console.log("Opção inválida. Tente novamente.");
        prompt("Pressione ENTER para continuar...");
      }
    } else {
      console.log("Entrada inválida. Por favor, digite um número.");
      prompt("Pressione ENTER para continuar...");
    }
  }
  console.log("Programa encerrado.");
}

mainMenu();
import PromptSync from "prompt-sync";
const prompt = PromptSync();

import exercise01 from "../Lista 1/ex01.js";
import exercise02 from "../Lista 1/ex02.js";
import exercise03 from "../Lista 1/ex03.js";

const exercises = [
  { name: "Exercício 1: Par ou Ímpar", execute: exercise01 },
  { name: "Exercício 2: Classificador de Faixa Etária", execute: exercise02}, 
  { name: "Exercício 3: Classificador de Faixa Etária", execute: exercise03 },                                            
];

export default async function list1Menu() {
  let isListMenuRunning = true;
  while (isListMenuRunning) {
    console.clear();
    console.log("--- Menu da Lista 1 ---");
    exercises.forEach((exercise, index) => {
      console.log(`${index + 1}. ${exercise.name}`);
    });
    console.log("0. Voltar ao Menu Principal");
    console.log("-----------------------");

    const choiceString = prompt("Escolha um exercício (ou 0 para voltar): ");
    
    if (choiceString === null) {
        isListMenuRunning = false;
        break;
    }
    const choiceNumber = parseInt(choiceString);

    if (!isNaN(choiceNumber)) {
      if (choiceNumber === 0) {
        isListMenuRunning = false;
      } else if (choiceNumber > 0 && choiceNumber <= exercises.length) {
        const selectedExercise = exercises[choiceNumber - 1];
        console.clear();
        try {
          if (typeof selectedExercise.execute === 'function') {
            await selectedExercise.execute();
          } else {
            console.log("Erro: Função do exercício não encontrada.");
            prompt("Pressione ENTER para continuar...");
          }
        } catch (error) {
          console.error(`Erro ao executar o exercício: ${error}`);
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
  console.clear();
}
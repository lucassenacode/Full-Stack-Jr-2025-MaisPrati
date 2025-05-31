import PromptSync from "prompt-sync";
const prompt = PromptSync();

import exercise01 from "./ex01.js";
import exercise02 from "./ex02.js";
import exercise03 from "./ex03.js";
import exercise04 from "./ex04.js";
import exercise05 from "./ex05.js";
import exercise06 from "./ex06.js";
import exercise07 from "./ex07.js";
import exercise08 from "./ex08.js";
import exercise09 from "./ex09.js";


const exercises = [
  { name: "Exercício 01: Validador de Datas", execute: exercise01 },
  { name: "Exercício 02: Jogo de Adivinhação", execute: exercise02}, 
  { name: "Exercício 03: Extrator de Palavras Únicas", execute: exercise03 },
  { name: "Exercício 04: Fatorial Recursivo", execute: exercise04 }, 
  { name: "Exercício 05: Função Debounce", execute: exercise05 },
  { name: "Exercício 06: Memoization", execute: exercise06 },
  { name: "Exercício 07: Mapeamento e Ordenação", execute: exercise07 },
  { name: "Exercício 08: Agrupamento", execute: exercise08 }, 
  { name: "Exercício 09: Conversor: Array de Pares/Objeto", execute: exercise09 },
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
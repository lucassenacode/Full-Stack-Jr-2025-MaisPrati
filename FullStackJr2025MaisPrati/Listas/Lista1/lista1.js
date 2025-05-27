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
import exercise10 from "./ex10.js";
import exercise11 from "./ex11.js";
import exercise12 from "./ex12.js";
import exercise13 from "./ex13.js";
import exercise14 from "./ex14.js";
import exercise15 from "./ex15.js";




const exercises = [
  { name: "Exercício 01: Par ou Ímpar", execute: exercise01 },
  { name: "Exercício 02: Classificador de Faixa Etária", execute: exercise02}, 
  { name: "Exercício 03: Classificador de Notas Escolares", execute: exercise03 },
  { name: "Exercício 04: Menu Interativo Estilo Video Game", execute: exercise04 }, 
  { name: "Exercício 05: Calculadora de IMC", execute: exercise05 },
  { name: "Exercício 06: Analisador de Triânguloso", execute: exercise06 },
  { name: "Exercício 07: Calculadora de Custo de Maçãs", execute: exercise07 },
  { name: "Exercício 08: Ordenador de Dois Números", execute: exercise08 }, 
  { name: "Exercício 09: Contagem Regressiva", execute: exercise09 },
  { name: "Exercício 10: Repetidor de Número", execute: exercise10 },
  { name: "Exercício 11: Somar de Cinco Números", execute: exercise11 },
  { name: "Exercício 12: Gerador de Tabuada", execute: exercise12 },
  { name: "Exercício 13: Calculadora de Média", execute: exercise13 },
  { name: "Exercício 14: Calculadora de Fatorial", execute: exercise14 },
  { name: "Exercício 15: Sequência de Fibonacci", execute: exercise15 } 
]

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
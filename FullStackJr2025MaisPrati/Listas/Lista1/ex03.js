import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Classificador de Notas Escolares ---");
  console.log("Este programa solicita uma nota (de 0 a 10) e informa a situação do aluno (Aprovado, Recuperação ou Reprovado).");
};

const getGrade = () => {
  let gradeValue; 
  while (true) {
    const userInput = prompt("Digite a nota do aluno (0 a 10): ");
    gradeValue = parseFloat(userInput); 

    if (!isNaN(gradeValue) && gradeValue >= 0 && gradeValue <= 10) {
      break;
    } else if (isNaN(gradeValue)) {
      console.log("Valor inválido! Por favor, digite um número.");
    } else {
      console.log("Nota inválida! A nota deve ser um valor entre 0 e 10.");
    }
  }
  return gradeValue;
};

const classifyStudent = () => {
  statements();
  const grade = getGrade(); 
  if (grade >= 6) {
    console.log(`A nota ${grade} significa: Aprovado.`);
  } else if (grade >= 4) {
    console.log(`A nota ${grade} significa: Recuperação.`);
  } else {
    console.log(`A nota ${grade} significa: Reprovado.`);
  }
  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default classifyStudent;
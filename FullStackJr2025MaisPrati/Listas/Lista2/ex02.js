import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

const statements = () => {
  console.log("\n--- Jogo de Adivinhação de Números ---");
  console.log("Eu gerei um número aleatório entre 1 e 100. Tente adivinhar qual é!");
  console.log("A cada palpite, direi se o número secreto é 'mais alto' ou 'mais baixo'.");
};

const getGuessInput = (promptMessage) => {
  let guess;
  while (true) {
    const userInput = prompt(promptMessage);
    
    guess = parseInt(userInput);

    if (!isNaN(guess) && guess >= 1 && guess <= 100) {
      break; 
    } else if (isNaN(guess)) {
      console.log("Entrada inválida! Por favor, digite um número.");
    } else {
      console.log("Palpite inválido! O número deve ser entre 1 e 100.");
    }
  }
  return guess;
};

const guessingGame = () => {
  statements();

  
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let numberOfAttempts = 0;
  let guessedCorrectly = false;
  let currentGuess;

  console.log("\nQue comece o jogo!");

  while (!guessedCorrectly) {
    numberOfAttempts++;
    currentGuess = getGuessInput(`Tentativa ${numberOfAttempts}. Qual seu palpite (1-100)? `);

    if (currentGuess === secretNumber) {
      guessedCorrectly = true;
      console.log(`\n🎉 Parabéns! Você acertou o número ${secretNumber} em ${numberOfAttempts} tentativa(s)! 🎉`);
    } else if (currentGuess < secretNumber) {
      console.log("Mais alto! ⬆️");
    } else {
      console.log("Mais baixo! ⬇️");
    }
  }

  console.log("----------------------------------------");
  prompt("Pressione ENTER para continuar...");
};

export default guessingGame;
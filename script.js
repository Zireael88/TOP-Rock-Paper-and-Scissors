let humanScore = 0,
  computerScore = 0;

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
  let computer = getRandomIntInclusive(0, 2);
  let compchoice;
  if (computer == 0) {
    compchoice = "rock";
  } else if (computer == 1) {
    compchoice = "paper";
  } else if (computer == 2) {
    compchoice = "scissors";
  }

  return compchoice;
}

function getHumanChoice() {
  let human = prompt("Rock, Paper, Scissors? ");
  return human;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You Lose! Paper beats Rock.");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You Win! Scissors beats Paper.");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You Win! Paper beats Rock.");
    humanScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You Lose! Rock beats Scissors.");
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You Win! Rock beats Scissors.");
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You Lose! Scissors beats Paper.");
    computerScore++;
  } else if (humanChoice == computerChoice) {
    console.log("It's a tie!");
  }
}

function playGame() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}`);
}

playGame();
playGame();
playGame();
playGame();
playGame();

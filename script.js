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

const results = document.querySelector("#results")

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice){
    results.textContent = "It's a tie!";
  }
  else if ((humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")){
    
            humanScore ++;
            results.textContent = `You Win! ${humanChoice} beats ${computerChoice}.`
  }
  else {
    computerScore ++;
    results.textContent = `You Lose! ${computerChoice} beats ${humanChoice}.`
  }

  const scores = document.createElement("div")
scores.textContent = `Player: ${humanScore} | Computer: ${computerScore}`

results.appendChild(scores)

if (humanScore === 5 || computerScore === 5){
  const winner = document.createElement("div")
  if (humanScore === 5){
    winner.textContent = "You Win!"
  }
  else{
    winner.textContent = "You Lose! Computer Wins"
  }

  results.appendChild(winner)
  humanScore = 0;
  computerScore = 0;
}
}



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));

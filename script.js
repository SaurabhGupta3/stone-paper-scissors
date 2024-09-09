function displayScore() {
  document.getElementById(
    "score"
  ).innerText = `You : ${humanScore} and computer : ${computerScore}`;
}
function displayResult(result) {
  document.getElementById("result").innerText = result;
}
const butttons = document.querySelectorAll(".choice");
butttons.forEach((button) => {
  button.addEventListener("click", function () {
    const playerSelection = this.getAttribute("data-choice");
    playRound(playerSelection, getComputerChoice());
  });
});
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let a = Math.ceil(Math.random() * 3);
  if (a == 1) {
    return "rock";
  } else if (a == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function checkWinner() {
  if (humanScore === 5) {
    displayResult("Player wins the game!");
    resetGame();
  } else if (computerScore === 5) {
    displayResult("Computer wins the game!");
    resetGame();
  }
}
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  displayScore();
}
function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
  let result = `Player selected: ${humanChoice} `;
  result += `Computer selected: ${computerChoice} `;

  if (humanChoice == computerChoice) {
    result += "It's a tie!";
  } else if (
    (humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors")
  ) {
    result += "Computer wins!";
    computerScore++;
  } else {
    result += "Player wins!";
    humanScore++;
  }
  displayScore();
  displayResult(result);
  checkWinner();
}

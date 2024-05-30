const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const notification = document.getElementById("notification");

function checkWinner() {
  notification.textContent = "Game Over";
  if (humanScore > computerScore) {
    notification.textContent = "Congratulations! you win :)";
  } else if (humanScore < computerScore) {
    notification.textContent = "You Lose :(";
  } else {
    notification.textContent = "no one wins! Game is Draw";
  }
}

rock.addEventListener("click", function (e) {
  if (totalGames > 0) {
    playRound("rock", getComputerChoice());
    totalGames -= 1;
    if (totalGames === 0) checkWinner();
  }
});
paper.addEventListener("click", function (e) {
  console.log("paper is clicked");
  if (totalGames > 0) {
    playRound("paper", getComputerChoice());
    totalGames -= 1;
    if (totalGames === 0) checkWinner();
  }
});
scissors.addEventListener("click", function (e) {
  console.log("scissors is clicked");
  if (totalGames > 0) {
    playRound("scissors", getComputerChoice());
    totalGames -= 1;
    if (totalGames === 0) checkWinner();
  }
});

let totalGames = 5;
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

// function getHumanChoice() {
//     // let b = prompt("Enter a choice as rock or paper or scissors ");
//     return b;
// }

function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
  if (humanChoice == computerChoice) {
    notification.textContent = "draw ";
    notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    notification.textContent = "You Lose!";
    computerScore++;
    notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    notification.textContent = "you Won!";
    humanScore++;
    notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    notification.textContent = "you lose!";
    computerScore++;
    notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    notification.textContent = "You won!";
    humanScore++;
    notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    notification.textContent = "you lose!";
    computerScore++;
    notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    notification.textContent = "you won!";
    humanScore++;
    notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
  } else {
    notification.textContent = "Enter correct choice";
    notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
  }
}

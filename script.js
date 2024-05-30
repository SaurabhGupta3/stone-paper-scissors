const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const notification = document.getElementById("notification");

function checkWinner() {
  notification.textContent = "Game Over";

  if (humanScore > computerScore) {
    setTimeout(() => {
      notification.textContent =
        "Congratulations! you win :)  " +
        `You : ${humanScore} and computer : ${computerScore}`;
    }, 500);
  } else if (humanScore < computerScore) {
    setTimeout(() => {
      notification.textContent =
        "You Lose :(  " + `You : ${humanScore} and computer : ${computerScore}`;
    }, 500);
  } else {
    setTimeout(() => {
      notification.textContent =
        "no one wins! Game is Draw" +
        `You : ${humanScore} and computer : ${computerScore}`;
    }, 500);
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
    setTimeout(() => {
      notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
    }, 500);
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    setTimeout(() => {
      notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
    }, 500);
    notification.textContent = "You Lose!";
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    setTimeout(() => {
      notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
    }, 500);
    notification.textContent = "you Won!";
    humanScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    setTimeout(() => {
      notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
    }, 500);
    notification.textContent = "you lose!";
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    setTimeout(() => {
      notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
    }, 500);
    notification.textContent = "You won!";
    humanScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    setTimeout(() => {
      notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
    }, 500);
    notification.textContent = "you lose!";
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    setTimeout(() => {
      notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
    }, 500);
    notification.textContent = "you won!";
    humanScore++;
  } else {
    setTimeout(() => {
      notification.textContent = `You : ${humanScore} and computer : ${computerScore}`;
    }, 500);
    notification.textContent = "Enter correct choice";
  }
}

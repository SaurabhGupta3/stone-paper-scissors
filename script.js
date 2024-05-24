let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let a = Math.ceil((Math.random()*3));
    if(a == 1) {
        console.log("rock");
    } else if(a == 2) {
        console.log("paper");
    } else if(a == 3) {
        console.log("scissors");
    } else {
        console.log("got");
    }
}


function getHumanChoice() {
    let b = prompt("Enter a choice as rock or paper or scissors ");
    console.log(b);
}


function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if(humanChoice == computerChoice) {
        console.log("draw, play again");
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log("You Lose!");
        computerScore++;
    } else if(humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("you Won!");
        humanScore++;
    } else  if(humanChoice == 'rock' && computerChoice == 'paper') {
        console.log("you lose!");
        computerScore++;
    } else if(humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You won!");
        humanScore++;
    } else if(humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log("you lose!");
        computerScore++;
    } else if(humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("you won!");
        humanScore++;
    } else {
        console.log("Enter correct choice");
    }
}
playRound(getHumanChoice(), getComputerChoice());
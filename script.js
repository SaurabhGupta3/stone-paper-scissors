let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let a = Math.ceil((Math.random()*3));
    if(a == 1) {
        return 'rock';
    } else if(a == 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function getHumanChoice() {
    let b = prompt("Enter a choice as rock or paper or scissors ");
    return b;
}


function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if(humanChoice == computerChoice) {
        console.log("draw, play again");
        console.log(`You : ${humanScore} and computer : ${computerScore}`);
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log("You Lose!");
        computerScore++;
        console.log(`You : ${humanScore} and computer : ${computerScore}`);
    } else if(humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("you Won!");
        humanScore++;
        console.log(`You : ${humanScore} and computer : ${computerScore}`);
    } else  if(humanChoice == 'rock' && computerChoice == 'paper') {
        console.log("you lose!");
        computerScore++;
        console.log(`You : ${humanScore} and computer : ${computerScore}`);
    } else if(humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You won!");
        humanScore++;
        console.log(`You : ${humanScore} and computer : ${computerScore}`);
    } else if(humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log("you lose!");
        computerScore++;
        console.log(`You : ${humanScore} and computer : ${computerScore}`);
    } else if(humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("you won!");
        humanScore++;
        console.log(`You : ${humanScore} and computer : ${computerScore}`);
    } else {
        console.log("Enter correct choice");
        console.log(`You : ${humanScore} and computer : ${computerScore}`);
    }
}


function playGame() {
    for(let i=0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }    
    console.log("Game Over");
    if(humanScore > computerScore) {
        console.log("Congratulations! you win :)");
    } else if(humanScore < computerScore) {
        console.log("You Lose :(")
    } else {
        console.log("no one wins! Game is Draw");
    }
}

playGame();
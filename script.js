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
getComputerChoice();

function getHumanChoice() {
    let b = prompt("Enter a choice as rock or paper or scissors ");
    console.log(b);
}
getHumanChoice();
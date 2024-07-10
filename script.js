function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * 3);
    
    if(randomValue == 0) {
        return "Rock"
    } else if (randomValue == 1) {
        return "Paper"
    } else {
        return "Scissors"
    };
};

function getHumanChoice() {
    return prompt("Please select Rock, Paper, or Scissor")
};

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(computerChoice);
console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    
    if(humanChoice == "rock") {
        if(computerChoice == "paper"){
            console.log("You lose this round!");
            return computerScore +=1;
        } else if(computerChoice=="scissors"){
            console.log("You win this round!");
            return humanScore +=1;
        } else {
            console.log("Its a draw!");
        } 
    } else if(humanChoice == "paper") {
        if(computerChoice == "scissors"){
            console.log("You lose this round!");
            return computerScore +=1;
        } else if(computerChoice=="rock"){
            console.log("You win this round!");
            return humanScore +=1;
        } else {
            console.log("Its a draw!");
        }
    } if(humanChoice == "scissors") {
        if(computerChoice == "rock"){
            console.log("You lose this round!");
            return computerScore +=1;
        } else if(computerChoice=="paper"){
            console.log("You win this round!");
            return humanScore +=1;
        } else {
            console.log("Its a draw!");
        }
    };
};

playRound(humanChoice, computerChoice);
console.log(`Computer Score: ${computerScore}`);
console.log(`Human Score: ${humanScore}`);
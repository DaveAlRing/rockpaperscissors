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

function getUserChoice() {
    return prompt("Please select Rock, Paper, or Scissor")
};

let userChoice = getUserChoice();
let computerChoice = getComputerChoice();

console.log(computerChoice);
console.log(userChoice);

let humanScore = 0;
let computerScore = 0;

function compareChoice(userChoice, computerChoice) {
    if(userChoice==computerChoice) {
        
    }
}
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

function playRound(humanChoice, computerChoice) {
   
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    let result = '';

    if(humanChoice == "rock") {
        if(computerChoice == "paper"){
            return "You lose this round!";
        } else if(computerChoice=="scissors"){
            return "You win this round!";
        } else {
            return "Its a draw!";
        } 
    } else if(humanChoice == "paper") {
        if(computerChoice == "scissors"){
            return "You lose this round!";
        } else if(computerChoice=="rock"){
            return "You win this round!";
        } else {
            return "Its a draw!";
        }
    } if(humanChoice == "scissors") {
        if(computerChoice == "rock"){
            return "You lose this round!";
        } else if(computerChoice=="paper"){
            return "You win this round!";
        } else {
            return "Its a draw!";
        }
        };
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let result = '';
    let i = 0;

    while(i<5){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(humanChoice);
        console.log(computerChoice);
        result = playRound(humanChoice, computerChoice);
        console.log(result);
        if(result=="You win this round!") {
            humanScore++;
        } else if (result=="You lose this round!") {
            computerScore++;
        }
        i++;
    };
    console.log(`Computer Score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game.");
    } else {
        console.log("Its a tie!");
    }
};

playGame();



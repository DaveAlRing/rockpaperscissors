function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * 3);
    
    if(randomValue == 0) {
        return "rock"
    } else if (randomValue == 1) {
        return "paper"
    } else {
        return "scissors"
    };
};

function playRound(humanChoice, computerChoice) {

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
    } else {
        if(computerChoice == "rock"){
            return "You lose this round!";
        } else if(computerChoice=="paper"){
            return "You win this round!";
        } else {
            return "Its a draw!";
        }
        };
};

let humanScore = 0;
let computerScore = 0;

let playButton = document.querySelectorAll("button");

playButton.forEach(function(button) {
    button.addEventListener("click", ()=> {
        
        let result = '';
        let humanChoice = button.id;
        let computerChoice = getComputerChoice();

        result = playRound(humanChoice, computerChoice);
        if(result=="You win this round!") {
            humanScore++;
        } else if (result=="You lose this round!") {
                computerScore++;
        };

        let output = document.createElement("p");
        output.textContent = `Your choice: ${humanChoice}\r\n`
                            + `Computer choice: ${computerChoice}\r\n`
                            +`${result}\r\n\r\n`
                            + `Your score: ${humanScore}\r\n`
                            + `Computer score: ${computerScore}\r\n`;

        if (humanScore == 5) {
            output.textContent += "You win the game!";
            resultDiv.appendChild(output);
        } else if (computerScore == 5) {
            output.textContent += "You lose the game.";
            resultDiv.appendChild(output);
        };

        let resultDiv = document.querySelector(".result");
        resultDiv.appendChild(output);
    });
});

    // while(i<5){
    //     let humanChoice = getHumanChoice();
    //     let computerChoice = getComputerChoice();
    //     console.log(humanChoice);
    //     console.log(computerChoice);
    //     result = playRound(humanChoice, computerChoice);
    //     console.log(result);
    //     if(result=="You win this round!") {
    //         humanScore++;
    //     } else if (result=="You lose this round!") {
    //         computerScore++;
    //     }
    //     i++;
    // };
    // console.log(`Computer Score: ${computerScore}`);
    // console.log(`Human Score: ${humanScore}`);

//     if (humanScore > computerScore) {
//         return "You win the game!";
//     } else if (humanScore < computerScore) {
//         return "You lose the game.";
//     } else {
//         return "Its a tie!";
//     }
// };

// playGame();



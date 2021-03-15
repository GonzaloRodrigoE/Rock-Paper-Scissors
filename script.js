// score
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

// get random input
function getRandom() {
    let answer;
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        answer = "rock";
    } else if (number === 1) {
        answer = "paper";
    } else {
        answer = "scissors";
    }
    computerSelection = answer;
    return computerSelection;
}

// user input 
function userInput() {
    let user = prompt("type rock, paper or scissors", "rock");
    playerSelection = user.toLowerCase();
    return playerSelection;
}
userInput()

// game
function play(player, computer) {
    player = playerSelection;
    computer = computerSelection;
    getRandom()

    if (playerSelection === computerSelection) {
        console.log("It's a Tie!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Paper Beats Rock, You Win! \n score: " + (++playerScore));
        score();
        return playerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Scissors Beats Paper, Computer Wins! \n score: " + (++computerScore));
        score();
        return computerScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Paper Beats Rock, Computer Wins! \n score: " + (++computerScore));
        score();
        return computerScore;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Rock Beats Scissors, You Win! \n score: " + (++playerScore));
        score();
        return playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Scissors Beats Paper, You Win! \n score: " + (++playerScore));
        score();
        return playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Rock Beats Scissors, Computer Wins! \n score: " + (++computerScore));
        score();
        return computerScore;
    }
}


// reset scores at 5 games
function score() {
    if (playerScore === 5) {
        console.log("Congratulations \n You Win the Match");
        reset();
    } else if (computerScore === 5) {
        console.log("Computer Wins the Match \n Beep Beep");
        reset();
    } else {}
}
// Reset score

function reset() {
    playerScore = 0;
    computerScore = 0;
}




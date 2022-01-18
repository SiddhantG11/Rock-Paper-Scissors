let playerScore = document.querySelector('#player_score');
let computerScore = document.querySelector('#computer_score');
const gameChoices = ["rock","paper","scissors"];
const selectedButtons = document.querySelectorAll('.button');


selectedButtons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id);
    });
});

function incrementScore(score) {
    score.innerText = parseInt(score.innerText) + 1;
}

function playRound(playerSelection) {
   
    let computerSelection = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    let verdict = document.createElement('div');
    if (playerSelection == computerSelection) {
        verdict.textContent = "The Game was a Tie";
        document.getElementById('result').appendChild(verdict);
        }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper'))
    {
        incrementScore(playerScore);
        verdict.textContent = `You Win!, ${playerSelection} beats ${computerSelection} `;
        document.getElementById('result').appendChild(verdict);
    }
    else {
        incrementScore(computerScore);
        verdict.textContent = `You Loose! ${computerSelection} beats ${playerSelection} `;
        document.getElementById('result').appendChild(verdict);
    }
       
}







// function game() {
//     // for (i = 0; i < 2; i++){
//         //  const userInput = prompt('Please enter rock paper or scissors');
//         const computerSelection = computerPlay();
//         console.log(playRound (userInput, computerSelection));
//     // }
// }

// game();





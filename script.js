let playerScore = 0;
let computerScore = 0;
let result;



const gameChoices = ["rock","paper","scissors"];
const selectedButtons = document.querySelectorAll('.button');
// let computerSelection = function computerPlay() {
//     return 
// }




selectedButtons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id);
    });
});

function playRound(playerSelection) {
   
    let computerSelection = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    if (playerSelection == computerSelection) {
            console.log('tied game') ;
        }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper'))
    {
        playerScore++;   
        console.log(`you win! ${playerSelection} beats ${computerSelection} `) ;
    }
    else {
        computerScore++;
        console.log(`you loose ${computerSelection} beats ${playerSelection}`) ;
    }
    
        
}









// function makeSelection (userInput) {
//     console.log(userInput);

//     
// }



// function game() {
//     // for (i = 0; i < 2; i++){
//         //  const userInput = prompt('Please enter rock paper or scissors');
//         const computerSelection = computerPlay();
//         console.log(playRound (userInput, computerSelection));
//     // }
// }

// game();





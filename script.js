// Write function to return rock paper or scissors 


// Write second function that plays one round of RPS 
    //make it case insensitive 
    // check output with console.log 

// use second function inside of new one and play a five round game 
    //loop over 5 times 
    //use prompt to get input from user 

const gameChoices = ["rock","paper","scissors"];

function computerPlay() {
    return gameChoices[Math.floor(Math.random()*gameChoices.length)];
}



function playRound (userInput, computerSelection) {
    
    let userInput = prompt('Please enter rock paper or scissors');
    let newInput = userInput.toLowerCase();
    if (newInput == computerSelection) {
        return 'tie game';
    }
    else if ((newInput == 'rock' && computerSelection == 'scissors') || (newInput == 'paper' && computerSelection == 'rock') || (newInput == 'scissors' && computerSelection == 'paper'))
     {
        return 'you win!';
    }
    else {
        return 'you loose';
    }

}


function game() {
    for(i = 0; i<6; i++) {
        const computerSelection = computerPlay();
        playRound(userInput,computerSelection);
        console.log(playRound(userInput, computerSelection));
    }
    
}
game();


let playerScore = 0
let computerScore = 0
const container = document.getElementById('buttonContainer');
const selectedButtons = document.querySelectorAll('.button');

function computerPlay() {
    const gameChoices = ['rock', 'paper', 'scissors']
    return gameChoices[Math.floor(Math.random() * gameChoices.length)]
}

function stopButton() {
    selectedButtons.forEach( e => {
        e.disabled = true 
    })
}

selectedButtons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id);
    });
});


function playRound(playerSelection) {
    let result = ""
    let computerSelection = computerPlay();
   

    if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br> Your score: " + playerScore + "<br>Computer score: " + computerScore)
            console.log(computerSelection);
        }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper'))
    {
        playerScore++;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
         + "<br><br> Your score: " + playerScore + "<br>Computer score: " + computerScore)
         console.log(computerSelection);
        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            stopButton()
        }
    }

    else {
        computerScore++;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
        + "<br><br> Your score: " + playerScore + "<br>Computer score: " + computerScore)
        console.log(computerSelection);
        if (computerScore == 5) {
            result += '<br><br>You Lost the game! Reload the page to play again'
            stopButton()
        }
    }
    document.getElementById('result').innerHTML = result
    return
       
}







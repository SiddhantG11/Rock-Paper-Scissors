// Write function to return rock paper or scissors 

// Test it 

// Write second function that plays one round of RPS 
    //make it case insensitive 
    // check output with console.log 

// use second function inside of new one and play a five round game 
    //loop over 5 times 
    //use prompt to get input from user 

const gameChoices = ["Rock","Paper","Scissors"];

function computerPlay() {
    return gameChoices[Math.floor(Math.random()*gameChoices.length)];
}

console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
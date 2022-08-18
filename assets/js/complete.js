// Enter arrays
// // // Write the pop-up window code
// // // Do you want to play?
// // // User Function, enter R, P, or S
function letsPlay() {
    if (window.confirm("Do you want to play a game?")) {
        console.log("They decided to play!");
        RPS();
    } else {
        window.alert("Maybe next time. . .");
        console.log("Fun over. . .");
        return;
    };
}

// Keep global variables out of the functions!
var tie = 0
var win = 0
var lose = 0

letsPlay();

function RPS() {
        var userOptions = ["ROCK", "PAPER", "SCISSORS"]
        var compOptions = ["ROCK", "PAPER", "SCISSORS"]

        var userChoice = prompt("Type Rock, Paper, or Scissors!");
        console.log(userChoice)
        if (userChoice === null) {
            return;
        }

        console.log(userChoice.toUpperCase())

        if (userChoice.toUpperCase() == userOptions[0] || userChoice.toUpperCase() == userOptions[1] || userChoice.toUpperCase() == userOptions[2]) {
                window.alert("You chose " + userChoice.toUpperCase() + "!");
                console.log(userChoice.toUpperCase());
        } 
        else {

            window.alert("Was that a typo, or were you just being funny?");
            // return;
        };

        console.log(userChoice)
        userChoice = userChoice.toLocaleUpperCase()
    // Computer function randomizes R, P, or S
    // The computer makes a choice!
        var compChoice = compOptions[Math.floor(Math.random() * compOptions.length)];

        console.log("computer chose " + compChoice);
        console.log("player chose " + userChoice);

    // Did you win? Log win, loss, and tie
        if (userChoice === compChoice) {
            window.alert("The computer chose. . . " + compChoice + "! It's a tie!");
            tie ++;
            console.log(tie)
        } else if ((userChoice == "ROCK" && compChoice == "SCISSORS") || (userChoice == "PAPER" && compChoice == "ROCK") || (userChoice == "SCISSORS" && compChoice == "PAPER")) {
            window.alert("The computer chose. . . " + compChoice + "! You win!");
            win ++;
            console.log(win)
        } else {
            window.alert("The computer chose. . . " + compChoice + "! You LOSE!");
            lose ++;
            console.log(lose)
        }

    // // Current score
    // // Do you want to play again?
        if (window.confirm("You have won "+ win + " rounds, lost " + lose + " rounds, and tied " + tie + " rounds. Would you like to play again?")) {
            RPS();
        } else {
            window.alert("Some other time, then. . .");
            leave = true;
        }
}
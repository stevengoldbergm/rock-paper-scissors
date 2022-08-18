// Enter arrays
// // // Write the pop-up window code
// // // Do you want to play?
// // // User Function, enter R, P, or S
var playAgain = true
// while (playAgain) {
//     letsPlay();
// }
// Keep global variables out of the functions!
var tie = 0
var win = 0
var lose = 0

letsPlay();

function letsPlay() {
    if (window.confirm("Are you ready for some Rock, Paper, Scissors?!")) {
        console.log("They decided to play!");
        RPS();
    } else {
        window.alert("Maybe next time. . .");
        console.log("Fun over. . .");
        playAgain = false;
        return;
    };
}

function RPS() {
        var userOptions = ["ROCK", "PAPER", "SCISSORS"]
        var compOptions = ["ROCK", "PAPER", "SCISSORS"]

        var userChoice = prompt("Type Rock, Paper, or Scissors!");
        console.log(userChoice)
        if (userChoice === null) {
            playAgain = false;
            return;
        }

        userChoice = userChoice.toLocaleUpperCase()
        console.log(userChoice)

        if (userChoice == userOptions[0] || userChoice == userOptions[1] || userChoice == userOptions[2]) {
                window.alert("You chose " + userChoice + "!");
                console.log(userChoice);
        } 
        else {

            window.alert("Was that a typo, or were you just being funny?");
            playAgain = false;
            return;
        };

        console.log(userChoice)

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

    // // // Current score
    // // // Do you want to play again?
    //     if (window.confirm("You have won "+ win + " rounds, lost " + lose + " rounds, and tied " + tie + " rounds. Would you like to play again?")) {
    //         RPS();
    //     } else {
    //         window.alert("Some other time, then. . .");
    //         leave = true;
    //     }
}

// Current score
// Do you want to play again?

    while (playAgain) {
        if (window.confirm("You have won "+ win + " rounds, lost " + lose + " rounds, and tied " + tie + " rounds. Would you like to play again?")) {
                RPS();
            } else {
                window.alert("Some other time, then. . ."); 
                playAgain = false
            }
    }
    
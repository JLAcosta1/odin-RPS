function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {

    let computerPick = getRandomInt()

    if (computerPick == 0) {
        computerPick = "Rock";
    }

    else if (computerPick == 1) {
        computerPick = "Paper";
    }

    else {
        computerPick = "Scissors";
    }

    return computerPick
}

function playRound(playerOne, playerTwo) {

    let winner = 0;

    if (playerOne == playerTwo) {

        console.log("Draw! Both player played " + playerOne);
    }

    else if (playerOne == "Rock") {
        if (playerTwo == "Scissors") {
            console.log("You win the round! " + playerOne + " beats " + playerTwo);
            winner = 1;
        }

        else {
            console.log("You lose the round. " + playerTwo + " beats " + playerOne);
            winner = 2;
        }
    }
    
    else if (playerOne == "Paper") {
        if (playerTwo == "Rock") {
            console.log("You win the round! " + playerOne + " beats " + playerTwo);
            winner = 1;
        }

        else {
            console.log("You lose the round. " + playerTwo + " beats " + playerOne);
            winner = 2;
        }
    }

    else if (playerOne == "Scissors") {
        if (playerTwo == "Paper") {
            console.log("You win the round! " + playerOne + " beats " + playerTwo);
            winner = 1;
        }

        else {
            console.log("You lose the round. " + playerTwo + " beats " + playerOne);
            winner = 2;
        }
    }
    return winner;
}

function playerSelectionPrompt() {
    let booleanSelection = true;
    let input = prompt("Select rock, paper, or scissors!");

    input.toLowerCase();


    while (booleanSelection) {
        if (input == "rock" || input == "paper" || input == "scissors") {
            booleanSelection = false;
        }
        else {
            console.log("Invalid input.");
            input = prompt("Select rock, paper, or scissors!");
        }
    }

    input = input.charAt(0).toUpperCase() + input.slice(1);
    return input;
}

function game() {
    let playerTracker = 0;
    let compTracker = 0;
    let i = 0;
    let winner = 0;
    while (i < 5) {
        
        let playerSelection = playerSelectionPrompt();
        let compOne = computerPlay();

        winner = playRound(playerSelection, compOne);

        if (winner == 1) {
            playerTracker = playerTracker + 1;
        }

        else if (winner == 2) {
            compTracker = compTracker + 1;
        }


        i = i + 1;
    }

    if (playerTracker == compTracker) {
        return "Game ended in a draw!"
    }
    else if (playerTracker > compTracker) {
        return "You win the game!"
    }

    else {
        return "You lose the game."
    }
}

console.log(game());
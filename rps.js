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
    if (playerOne == playerTwo) {
        return "Draw! Both player played " + playerOne;
    }

    if (playerOne == "Rock") {
        if (playerTwo == "Scissors") {
            return "You win! " + playerOne + " beats " + playerTwo;
        }

        else {
            return "You lose. " + playerTwo + " beats " + playerOne;
        }
    }
    
    if (playerOne == "Paper") {
        if (playerTwo == "Rock") {
            return "You win! " + playerOne + " beats " + playerTwo;
        }

        else {
            return "You lose. " + playerTwo + " beats " + playerOne;
        }
    }

    if (playerOne == "Scissors") {
        if (playerTwo == "Paper") {
            return "You win! " + playerOne + " beats " + playerTwo;
        }

        else {
            return "You lose. " + playerTwo + " beats " + playerOne;
        }
    }

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

function repeater() {
    let i = 0;
    while (i < 30) {
        let compOne = computerPlay();
        let compTwo = computerPlay();

        console.log(playRound(compOne, compTwo))
        i = i + 1;
    }
}


/* console.log(repeater()); */
console.log("Step 1");
let playerSelection = playerSelectionPrompt();
console.log("Step 2");
let compOne = computerPlay();
console.log("Step 3");
console.log(playRound(playerSelection, compOne));
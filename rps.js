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

function RPS(playerOne, playerTwo) {
    if (playerOne == playerTwo) {
        return "Draw! Both player played " + playerOne;
    }

    if (playerOne == "Rock") {
        if (playerTwo == "Scissors") {
            return "playerOne wins! " + playerOne + " beats " + playerTwo;
        }

        else {
            return "playTwo wins! " + playerTwo + " beats " + playerOne;
        }
    }
    
    if (playerOne == "Paper") {
        if (playerTwo == "Rock") {
            return "playerOne wins! " + playerOne + " beats " + playerTwo;
        }

        else {
            return "playTwo wins! " + playerTwo + " beats " + playerOne;
        }
    }

    if (playerOne == "Scissors") {
        if (playerTwo == "Paper") {
            return "playerOne wins! " + playerOne + " beats " + playerTwo;
        }

        else {
            return "playTwo wins! " + playerTwo + " beats " + playerOne;
        }
    }

}

function repeater() {
    let i = 0;
    while (i < 30) {
        let compOne = computerPlay();
        let compTwo = computerPlay();

        console.log(RPS(compOne, compTwo))
        i = i + 1;
    }
}


console.log(repeater());
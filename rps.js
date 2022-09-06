let playerTracker = 0;
let compTracker = 0;
let gameOver = false;

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

function playRound(playerOne, playerTwo = null) {

    let winner = 0;
    let str = '';

    if (playerTwo === null) {
        playerTwo = computerPlay();
    }

    if (playerOne == playerTwo) {

        str = "Draw! Both player played " + playerOne;
    }

    else if (playerOne == "Rock") {
        if (playerTwo == "Scissors") {
            str = "You win the round! " + playerOne + " beats " + playerTwo;
            winner = 1;
        }

        else {
            str = "You lose the round. " + playerTwo + " beats " + playerOne;
            winner = 2;
        }
    }
    
    else if (playerOne == "Paper") {
        if (playerTwo == "Rock") {
            str = "You win the round! " + playerOne + " beats " + playerTwo;
            winner = 1;
        }

        else {
            str = "You lose the round. " + playerTwo + " beats " + playerOne;
            winner = 2;
        }
    }

    else if (playerOne == "Scissors") {
        if (playerTwo == "Paper") {
            str = "You win the round! " + playerOne + " beats " + playerTwo;
            winner = 1;
        }

        else {
            str = "You lose the round. " + playerTwo + " beats " + playerOne;
            winner = 2;
        }
    }
    roundResults(str);

    if (winner !== 0) {
        scoreTracker(winner);
    }
    return winner;
}

function scoreTracker(winner) {

    let finalString = ''

    if (winner == 1) {
        playerTracker = playerTracker + 1;
    }

    else if (winner == 2) {
        compTracker = compTracker + 1;
    }

    if (winner !== 0) {
        const div = document.querySelector('#Standing');

        div.textContent = "You: " + playerTracker + " Computer: " + compTracker;
    }

    if (playerTracker === 5 || compTracker === 5) {

        gameOver = true;

        if (playerTracker == 5) {
            finalString = "Human wins!"
        }

        else {
            finalString = "Computer wins :("
        }

        roundResults(finalString)
    }
}


const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(e) {
    if (!gameOver) {
        playRound(e.target.id);
        console.log(e.target.id);
    }
}));

function roundResults (str) {
    const container = document.querySelector('#results');

    const round = document.createElement('div');
    round.textContent = str;

    container.appendChild(round);
}
// console.log(game()); //This will immediately run the game
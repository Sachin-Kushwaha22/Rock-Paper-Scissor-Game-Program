// PROGRAM TO CREATE ROCK-PAPER-SCISSOR GAME

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const showResult = document.getElementById("showResult");

const playerchoosed = document.getElementById("playerChoosed");
const opponentchoosed = document.getElementById("opponentChoosed");

const playerscore = document.getElementById("playerScore");
playerscore.style.color = "green";
const opponentscore = document.getElementById("opponentScore");
opponentscore.style.color = "red";

let playerScoreCount = 0;
let opponentScoreCount = 0;

function tie() {
    const tie = showResult.textContent = "It's a tie!";
    if (tie === "It's a tie!" ) {
        showResult.style.color = "blue";
        showResult.style.fontWeight = "bolder";
    }
    
}

function lose() {
    const lose = showResult.textContent = "You lose!";
    if (lose === "You lose!" ) {
        showResult.style.color = "red";
        showResult.style.fontWeight = "bolder";
    }
}

function win() {
    const win = showResult.textContent = "You win!";
    if (win === "You win!" ) {
        showResult.style.color = "hsl(114, 92%, 30%)";
        showResult.style.fontWeight = "bolder";
    }
}


rock.addEventListener("click", event => {
    const playerChoice = Number(1);
    playerchoosed.textContent = "ROCK";

    const computerChoice = Number(Math.floor(Math.random() * 3) + 1);

    switch (computerChoice) {
        case 1:

            tie();
            opponentchoosed.textContent = "ROCK";
            playerscore.textContent = `${playerScoreCount}`;
            opponentscore.textContent = `${opponentScoreCount}`;

            break;

        case 2:

            lose();
            opponentchoosed.textContent = "PAPER";
            opponentScoreCount++;
            playerscore.textContent = `${playerScoreCount}`;
            opponentscore.textContent = `${opponentScoreCount}`;
            break;

        case 3:

            win();
            opponentchoosed.textContent = "SCISSORES";
            playerScoreCount++;
            playerscore.textContent = `${playerScoreCount}`;
            opponentscore.textContent = `${opponentScoreCount}`;
            break;

    }
});

paper.addEventListener("click", event => {
    const playerChoice = Number(2);
    playerchoosed.textContent = "PAPER";

    const computerChoice = Number(Math.floor(Math.random() * 3) + 1);

    switch (computerChoice) {
        case 2:
            tie();
            opponentchoosed.textContent = "PAPER";
            playerscore.textContent = `${playerScoreCount}`;
            opponentscore.textContent = `${opponentScoreCount}`;
            break;
        case 3:
            lose();
            opponentchoosed.textContent = "SCISSORS";
            opponentScoreCount++;
            playerscore.textContent = `${playerScoreCount}`;
            opponentscore.textContent = `${opponentScoreCount}`;
            break;
        case 1:
            win();
            opponentchoosed.textContent = "ROCK";
            playerScoreCount++;
            playerscore.textContent = `${playerScoreCount}`;
            opponentscore.textContent = `${opponentScoreCount}`;
            break;
    }
});

scissors.addEventListener("click", event => {
    const playerChoice = Number(3);
    playerchoosed.textContent = "SCISSORS";

    const computerChoice = Number(Math.floor(Math.random() * 3) + 1);

    switch (computerChoice) {
        case 3:
            tie();
            opponentchoosed.textContent = "SCISSORS";
            playerscore.textContent = `${playerScoreCount}`;
            opponentscore.textContent = `${opponentScoreCount}`;
            break;
        case 1:
            lose();
            opponentchoosed.textContent = "ROCK";
            opponentScoreCount++;
            playerscore.textContent = `${playerScoreCount}`;
            opponentscore.textContent = `${opponentScoreCount}`;
            break;
        case 2:
            win();
            opponentchoosed.textContent = "PAPER";
            playerScoreCount++;
            playerscore.textContent = `${playerScoreCount}`;
            opponentscore.textContent = `${opponentScoreCount}`;
            break;
    }
});
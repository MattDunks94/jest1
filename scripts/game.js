let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
    turnNumber: 0,
};

// Resets the game.
function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
    for(let circle of document.getElementsByClassName("circle")) {
        circle.addEventListener("click", (e) => {
            let move = e.target.getAttribute("id");
            lightsOn(move);
            game.playerMoves.push(move);
            playerTurn();
        });
        circle.setAttribute("data-listener", "true");
    };
};

// Adds player turn.
function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurns();
};

// Displays the score.
function showScore() {
    document.getElementById("score").innerText = game.score;
};

// Adds and removes the class "light" the chosen elements.
function lightsOn(circ) {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
};

// Shows the turn number.
function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
};

/**
 * module.exports:
 * An instruction that tells Node.js, which bits of code 
 * (functions, objects, strings, etc.) to 'export' from a given file, 
 * so other files can have access to it.
 * Below, exporting objects and functions created in this file. 
 * This enables our game.test.js file access to these bits of code so we can test them.
 */
module.exports = {
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn, 
    showTurns,
};
let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
};

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
};

function showScore() {
    document.getElementById("score").innerText = game.score;
};

/**
 * module.exports:
 * An instruction that tells Node.js, which bits of code 
 * (functions, objects, strings, etc.) to 'export' from a given file, 
 * so other files can access it.
 * Below, exporting 'game' object, newGame(), showScore(). 
 * This enables our game.test.js file access to these bits of code so we can test them.
 */
module.exports = { game, newGame, showScore, addTurn };
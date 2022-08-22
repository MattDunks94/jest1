let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: [],
};

/**
 * module.exports:
 * An instruction that tells Node.js, which bits of code 
 * (functions, objects, strings, etc.) to 'export' from a given file, 
 * so other files can access it.
 * Below, exporting 'game' object so our game.test.js has access to it.
 */
module.exports = { game };
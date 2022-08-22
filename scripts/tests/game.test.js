/**
 * @jest-environment jsdom
 */

// Accessing our game object from game.js.
const { game, newGame, showScore, addTurn } = require("../game") ;


// This loads our index.html into jests mock DOM, before our tests begin.
beforeAll(() => {
    // fs = File System Module, allows us access to other files in our repository.
    let fs = require("fs");
    // Accessing our index.html file.
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// Tests for our game object from game.js.
describe("game object contains correct keys", () => {
    // Testing if 'score' exists in our game object.
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    // Testing if 'currentGame' exists in game object.
    test("currentGame exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    // Testing if 'playerMoves' exists in game object.
    test("playerMoves exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    // Testing if 'choices' exists in game object.
    test("choices exists", () => {
        expect("choices" in game).toBe(true);
    });
    // Testing if 'choices' in our game object contains the correct id's.
    test("choices contain correct id's", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

// Test for our newGame function.
describe("newGame works correctly", () => {
    beforeAll(() => {
        // Assigning game object fake key id's for testing purposes only.
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    // Testing if the newGame function resets the score to 0.
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    // Testing if the newGame function resets the playerMoves array.
    test("should clear the playerMoves array", () => {
        expect(game.playerMoves.length).toEqual(0);
    });
    // Testing if the newGame function resets the currentGame array.
    test("should be one move in the computer's game array", () => {
        expect(game.currentGame.length).toEqual(1);
    });
    // Testing if the newGame function displays 0 for element with id of "score".
    test("should display 0 for the element with the id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});
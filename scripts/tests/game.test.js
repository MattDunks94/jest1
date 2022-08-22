/**
 * @jest-environment jsdom
 */

// Accessing our game object from game.js.
const { game } = require("../game") ;

// This loads our index.html into jests mock DOM, before our tests begin.
beforeAll(() => {
    // fs = File System Module, allows us access to files in our repository.
    let fs = require("fs");
    // Accessing our index.html file.
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// Tests.
// The first test is testing if 'score' exists in our game object from game.js.
describe("game object contains correct keys", () => {
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
});
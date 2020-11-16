//store all DOM elements as attributes inside of an object for DRY (do not repeat yourself)
//then access all DOM elements by calling properties from this object

function getTilesDom() {
    return Array.from(document.querySelectorAll("td"));
}

const DOM = {
    tiles: getTilesDom(),
    x: 'blue', //image
    o: 'green', //image
    alert: document.querySelector(".alert"),
    boardSizeInput: document.querySelector("#board-size-input"),
    toWinInput: document.querySelector("#to-win-input"),
    submitButton: document.querySelector("#submit-button"),
    board: document.querySelector("tbody"),
};

let state = {
    currentPlayer: "x",
    player : {
        x: [],
        o: [],
    },
    playerName: {
        x: "Blue",
        o: "Green",
    },
    boardSize: 3,
    toWin: 3,
};

function main() {
    DOM.tiles.forEach((tile) => {
        tile.addEventListener("click", insertToken);
    });
}

main();
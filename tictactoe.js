let gameState = {
  currentPlayer: "X",
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  player1Name: "",
  player2Name: "",
  gameState: "playing",
};

const cellSelect = document.querySelectorAll(".cell");
const PLAYER_X = "X";
const PLAYER_Y = "Y";
let turn = PLAYER_X;

const winnerNow = document.getElementById("winner");
const gameoverNotice = document.getElementById("gameover-notice");
const playAgain = document.getElementById("play-again");
// const boardState = Array(cell.length);
const gameBoard = document.querySelector("#board");
gameBoard.addEventListener(
  "click",
  function (e) {
    // console.log(typeof e.target.id);
    const index = +e.target.id;
    [i];
  },
  // boardState.fill(null);

  // The elements and stuff

  // Used arrow syntax - broke it now matter what :(
  cells.forEach((cell) => cell.addEventListener("click", cellClick))
);

function cellClick(event) {
  if (gameOverArea.classList.contains("visible")) {
    return;
  }
}
const cell = cellClick.target;

gameState.board[index] = gameState.currentPlayer;
console.log(gameState.board);
renderBoard();
switchPlayer();
takeTurn();

function takeTurn() {
  renderBoard();
  switchPlayer();
}

function switchPlayer() {
  if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
  } else {
    gameState.currentPlayer = "X";
  }
}

function renderBoard() {
  for (let i = 0; i < gameState.board.length; i++) {
    [];
    const currDiv = document.getElementById(`${i}`);
    currDiv.innerText = gameState.board[i];
  }
}
inputForm.addEventListener("submit", function (e) {
  e.preventDefault();

  /* This prevents the page from auto reloading */
  //   console.log(e.target); /** This references the whole form */
  //   console.log(e.target[0]); /* This references the first element of the form*/
  //   console.log(e.target[0].value); /** This pulls the value off of the input */

  gameState.player1 = e.target[i].value;
  gameState.player2 = e.target[i].value;

  e.target[0].value = "";
  e.target[1].value = "";
  // Call our render function to reflect our state in the browser
  render();
});
const board = document.querySelector("#board");
board.addEventListener("click", function (e) {
  // console.log(typeof e.target.id);
  const index = +e.target.id;
  [88];
  // console.log(typeof index);
  gameState.board[index] = gameState.currentPlayer;
  // console.log(gameState.board);
  // renderBoard();
  // switchPlayer();
  takeTurn();
});
function takeTurn() {
  renderBoard();
  switchPlayer();
}

function switchPlayer() {
  if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
  } else {
    gameState.currentPlayer = "X";
  }
}

function renderBoard() {
  for (let i = 0; i < gameState.board.length; i++) {
    //                                      #0, #1, #2
    const currDiv = document.getElementById(`${i}`);
    currDiv.innerText = gameState.board[i];
  }
}
resetButton.addEventListener("click", function (e) {
  // Re-assign our gameState to the default
  gameState = {
    player1: null,
    player2: null,
  };
  render();
});

// Function that renders the current state to DOM elements
function render() {
  player1Display.innerText = gameState.player1;
  player2Display.innerText = gameState.player2;
}

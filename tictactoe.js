// let gameState = {
//   currentPlayer: "X",
//   board: [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ],
//   player1Name: "",
//   player2Name: "",
//   gameState: "playing",
// };

//   ******************* neww***********

let gameState = {
  player1: null,
  player2: null,
};
let inputP1Name = document.getElementById("p1Name");
let inputP2Name = document.getElementById("p2Name");
let button = document.getElementById("button1");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

button.addEventListener("click", function (e) {
  const P1Name = inputP1Name.value;
  const P2Name = inputP2Name.value;
  player1.innerText = P1Name;
  player2.innerText = P2Name;
});

//************************end of NEW ********************

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
  }
  // boardState.fill(null);

  // The elements and stuff

  // Used arrow syntax - broke it now matter what :(
  cell.forEach((cell) => cell.addEventListener("click", cellClick))
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
inputForm.addEventListener("inputForm", function (e) {
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

// TESTING PREVENT ↓
//var form = document.getElementById("myForm");
// function handleForm(event) { event.preventDefault(); }
// form.addEventListener('submit', handleForm);

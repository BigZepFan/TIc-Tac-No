let gameState = {
  player1: null,
  player2: null,
};
// let gameState = {
//   board: [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ],
//   // Maybe a current Player?
//   // A game status?? 'isPlaying' or 'over'
//   // Any other data your game logic depends on?
// };
// const inputForm = document.querySelector("#input-form");
// const player1Display = document.querySelector("#p1name");
// const player2Display = document.querySelector("#p2name");
// const resetButton = document.querySelector(".reset");

board.addEventListener("click", function (event) {
  // Figure out how to get the coordinates off event object (e.target.value)
  // Use those coordinates to reference indexes in our gameState.board
  // Set the position in our board to the current player
});
function renderGame() {
  // Call this function after you've changed your state values
  // Make references to DOM elements, and set the innerText,
  // or innerHTML to reflect our gameState.board
}
function switchPlayer() {
  // ???
}

function checkWin() {
  // Maybe this calls other helper functions?
  // checkRow()
  // checkColumn()
  // checkDiagonals()
}
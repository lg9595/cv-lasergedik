let currentPlayer = "X";

let board = [
  "", "", "",
  "", "", "",
  "", "", ""
];

let gameActive = true;

const winningCombinations = [

  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(index) {

  if (board[index] !== "" || !gameActive) {
    return;
  }

  board[index] = currentPlayer;

  const cells =
    document.querySelectorAll(".cell");

  cells[index].textContent = currentPlayer;

  checkWinner();

  if (gameActive) {

    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }

    document.getElementById("game-status").textContent =
      "Spieler " + currentPlayer + " ist am Zug";
  }
}

function checkWinner() {

  for (let combination of winningCombinations) {

    let a = combination[0];
    let b = combination[1];
    let c = combination[2];

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {

      document.getElementById("game-status").textContent =
        "Spieler " + board[a] + " ist der Gewinner!";

      gameActive = false;

      return;
    }
  }

  if (!board.includes("")) {

    document.getElementById("game-status").textContent =
      "Unentschieden";

    gameActive = false;
  }
}

function resetGame() {

  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  currentPlayer = "X";

  gameActive = true;

  document.getElementById("game-status").textContent =
    "Spieler X ist am Zug";

  const cells =
    document.querySelectorAll(".cell");

  cells.forEach(function(cell) {
    cell.textContent = "";
  });
}

function checkPassword() {

  const password =
    document.getElementById("password").value;

  const message =
    document.getElementById("login-message");

  if (password === "HFTM2026") {

    window.location.href = "cv.html";

  } else {

    message.textContent =
      "Falsches Passwort.";

    message.style.color = "red";
  }
}
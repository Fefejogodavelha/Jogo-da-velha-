var board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

var player1 = "🐶";
var player2 = "🐱";
var currentPlayer = player1;

function drawBoard() {
  console.log(
    board[0][0] + "|" + board[0][1] + "|" + board[0][2] + "\n" +
    "-+-+-" + "\n" +
    board[1][0] + "|" + board[1][1] + "|" + board[1][2] + "\n" +
    "-+-+-" + "\n" +
    board[2][0] + "|" + board[2][1] + "|" + board[2][2]
  );
}

function placeMark(row, col) {
  if (board[row][col] === " ") {
    board[row][col] = currentPlayer;
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  } else {
    console.log("Space already taken, try again!");
  }
}

function checkForWin() {
  // check rows
  for (var i = 0; i < 3; i++) {
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] !== " "
    ) {
      return board[i][0];
    }
  }

  // check columns
  for (var j = 0; j < 3; j++) {
    if (
      board[0][j] === board[1][j] &&
      board[1][j] === board[2][j] &&
      board[0][j] !== " "
    ) {
      return board[0][j];
    }
  }

  // check diagonals
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] !== " "
  ) {
    return board[0][0];
  }
  if (
    board[2][0] === board[1][1] &&
    board[1][1] === board[0][2] &&
    board[2][0] !== " "
  ) {
    return board[2][0];
  }

  return null;
}

// Example game play
drawBoard();
placeMark(0, 0);
drawBoard();
placeMark(1, 1);
drawBoard();
placeMark(0, 1);
drawBoard();
placeMark(2, 2);
drawBoard();

var winner = checkForWin();
if (winner) {
  console.log("Winner is " + winner + "!");
} else {
  console.log("No winner yet!");
}

export const checkWinner = (board, setWinner) => {
  // check horizontal
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length - 3; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row][col + 1] &&
        board[row][col] === board[row][col + 2] &&
        board[row][col] === board[row][col + 3]
      ) {
        setWinner(board[row][col])
      }
    }
  }
  // check vertical
  for (let row = 0; row < board.length - 3; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row + 1][col] &&
        board[row][col] === board[row + 2][col] &&
        board[row][col] === board[row + 3][col]
      ) {
        setWinner(board[row][col])
      }
    }
  }
  // check diagonal
  for (let row = 0; row < board.length - 3; row++) {
    for (let col = 0; col < board[row].length - 3; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row + 1][col + 1] &&
        board[row][col] === board[row + 2][col + 2] &&
        board[row][col] === board[row + 3][col + 3]
      ) {
        setWinner(board[row][col])
      }
    }
  }
  // check diagonal
  for (let row = 0; row < board.length - 3; row++) {
    for (let col = 3; col < board[row].length; col++) {
      if (
        board[row][col] &&
        board[row][col] === board[row + 1][col - 1] &&
        board[row][col] === board[row + 2][col - 2] &&
        board[row][col] === board[row + 3][col - 3]
      ) {
        setWinner(board[row][col])
      }
    }
  }
  // check draw
  let draw = true
  board.forEach((row) => {
    row.some((cell) => cell === null) && (draw = false)
  })
  draw && setWinner('draw')
}

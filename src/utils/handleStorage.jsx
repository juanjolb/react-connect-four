export const saveToStorage = (board, turn) => {
  // set board as a string to store
  const stringBoard = JSON.stringify(board)
  window.localStorage.setItem('board', stringBoard)
  window.localStorage.setItem('turn', turn)
}

export const loadBoardStorage = () => {
  const board = window.localStorage.getItem('board')
  const turn = window.localStorage.getItem('turn')
  return {
    board: JSON.parse(board),
    turn
  }
}

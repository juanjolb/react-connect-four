import { useEffect, useState } from 'react'
import Cell from './Cell'
import ShowWinner from './ShowWinner'
import { checkWinner } from '../utils/checkWinner'
import { loadBoardStorage, saveToStorage } from '../utils/handleStorage'

const TURN = {
  X: '🟡',
  O: '🔴'
}

function Board () {
  const [board, setBoard] = useState(() => {
    const { board: loadedBoard } = loadBoardStorage()
    return !loadedBoard ? Array.from(Array(6), () => new Array(7).fill(null)) : loadedBoard
  })

  const [turn, setTurn] = useState(() => {
    const { turn: loadedTurn } = loadBoardStorage()
    return !loadedTurn ? '🟡' : loadedTurn
  }
  )
  const [winner, setWinner] = useState(null)

  const handleClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] || winner) return
    const newBoard = [...board]
    newBoard[rowIndex][colIndex] = turn
    setBoard(newBoard)
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
  }

  const resetGame = () => {
    setWinner(null)
    setTurn('🟡')
    setBoard(Array.from(Array(6), () => new Array(7).fill(null)))
  }

  useEffect(() => {
    checkWinner(board, setWinner)
    saveToStorage(board, turn)
  }, [board, Cell])

  return (
    <main className='board'>
      {winner && <ShowWinner winner={winner} resetGame={resetGame} />}
      <section className='game'>
        {board.map((row, rowIndex) =>
          row.map((_, colIndex) => (
            <Cell
              key={colIndex}
              handleClick={handleClick}
              rowIndex={rowIndex}
              colIndex={colIndex}
            >
              {board[rowIndex][colIndex]}
            </Cell>
          ))
        )}
      </section>
      <h3>TURN</h3>
      <section className='show-turn'>
        <Cell isActive={turn === TURN.X}>{TURN.X}</Cell>
        <Cell isActive={turn === TURN.O}>{TURN.O}</Cell>
      </section>
    </main>
  )
}

export default Board

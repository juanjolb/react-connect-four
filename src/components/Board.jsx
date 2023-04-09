import { useEffect, useState } from 'react'
import Cell from './Cell'
import ShowWinner from './ShowWinner'

const TURN = {
  X: '🟡',
  O: '🔴'
}

function Board () {
  const [board, setBoard] = useState(Array.from(Array(6), () => new Array(7).fill(null)))
  const [turn, setTurn] = useState('🟡')
  const [winner, setWinner] = useState(null)

  const handleClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] || winner) return
    const newBoard = [...board]
    newBoard[rowIndex][colIndex] = turn
    setBoard(newBoard)
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
  }

  const checkWinner = () => {
    // check horizontal
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length - 3; col++) {
        if (board[row][col] && board[row][col] === board[row][col + 1] && board[row][col] === board[row][col + 2] && board[row][col] === board[row][col + 3]) {
          setWinner(board[row][col])
        }
      }
    }
    // check vertical
    for (let row = 0; row < board.length - 3; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] && board[row][col] === board[row + 1][col] && board[row][col] === board[row + 2][col] && board[row][col] === board[row + 3][col]) {
          setWinner(board[row][col])
        }
      }
    }
    // check diagonal
    for (let row = 0; row < board.length - 3; row++) {
      for (let col = 0; col < board[row].length - 3; col++) {
        if (board[row][col] && board[row][col] === board[row + 1][col + 1] && board[row][col] === board[row + 2][col + 2] && board[row][col] === board[row + 3][col + 3]) {
          setWinner(board[row][col])
        }
      }
    }
    // check diagonal
    for (let row = 0; row < board.length - 3; row++) {
      for (let col = 3; col < board[row].length; col++) {
        if (board[row][col] && board[row][col] === board[row + 1][col - 1] && board[row][col] === board[row + 2][col - 2] && board[row][col] === board[row + 3][col - 3]) {
          setWinner(board[row][col])
        }
      }
    }
  }

  const resetGame = () => {
    setWinner(null)
    setTurn('✖️')
    setBoard(Array.from(Array(6), () => new Array(7).fill(null)))
  }

  useEffect(() => {
    checkWinner()
  }, [board])

  return (
    <main className='board'>
      {winner && <ShowWinner winner={winner} resetGame={resetGame} />}
      <section className='game'>
        {
          board.map((row, rowIndex) =>
            row.map((_, colIndex) =>
              <Cell key={colIndex} handleClick={handleClick} rowIndex={rowIndex} colIndex={colIndex}>{board[rowIndex][colIndex]}</Cell>
            )
          )
        }
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

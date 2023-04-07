import { useState } from 'react'
import Cell from './Cell'

function Board () {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill('x')))

  return (
    <main className='board'>
      {
        board.map(row =>
          row.map((_, index) => <Cell key={index}> child </Cell>)
        )
      }
    </main>
  )
}

export default Board

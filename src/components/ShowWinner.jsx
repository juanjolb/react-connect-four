function ShowWinner ({ winner, resetGame }) {
  const winnerMessage = winner === 'draw' ? 'It is a draw!' : `The winner is ${winner}!`

  return (
    <>
      <h2>{winnerMessage}</h2>
      <button className='reset' onClick={resetGame}>RESET GAME</button>
    </>
  )
}

export default ShowWinner

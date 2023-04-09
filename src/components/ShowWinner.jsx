function ShowWinner ({ winner, resetGame }) {
  return (
    <>
      <h2>The winner is {winner}!</h2>
      <button className='reset' onClick={resetGame}>RESET GAME</button>
    </>
  )
}

export default ShowWinner

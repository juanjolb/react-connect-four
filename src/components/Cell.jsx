function Cell ({ children, handleClick, rowIndex, colIndex, isActive }) {
  const cellClass = `cell ${isActive && 'active'}`

  return (
    <div className={cellClass} onClick={() => handleClick(rowIndex, colIndex)}>
      {children}
    </div>
  )
}
export default Cell

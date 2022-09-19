import React from 'react'
const Square = ({ value, onClick, isWinningSquares}) => {
  console.log(isWinningSquares);
  return (
    <button type="button" 
    className={`square ${value === 'X'?'text-green':'text-orange'}`}
    style={{
      background: isWinningSquares ? 'red':'initial'
    }}
    onClick={onClick}>
      {value}
    </button>
  );
};

export default Square
import React from 'react'
import "./Square.style.css";
const Square = ({value}) => {
    console.log();
  return (
        <button type='button' className='square'>{value}</button>
  )
}

export default Square
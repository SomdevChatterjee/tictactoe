import React from 'react'

const history = ({ history,moveTo, currentMove }) => {
  return (
    <div className='history-wrapper'>
      <ul className='history'>
        {
            history.map((_, move) =>{
              return  <li key={move} style={
                {
                    listStyleType:'none'
                }
              }>
                <button type="button"
                className={`btn-move ${move === currentMove?'active':''}`}
                onClick={()=>{
                    moveTo(move);
                }}>
                    {move === 0 ? 'go to game start':`go to move #${move}`}
                </button></li>
            })
        }
      </ul>
    </div>
  )
}

export default history

import React from 'react'

const history = ({ history,moveTo, currentMove }) => {
  return (
    <div>
      <ul>
        {
            history.map((_, move) =>{
              return  <li key={move} style={
                {
                    listStyleType:'none'
                }
              }>
                <button type="button"
                style={
                    {
                        background: move === currentMove?"#3e0a2f":'initial',
                        color:'white',
                    }
                }
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

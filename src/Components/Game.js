import React from 'react';

 const check =()=>{
    var d = new Date()
    alert(d);
}

const Game  = () =>{
    return(
        <div>
            <h1>Hii</h1>
            <button onClick={()=> check()}>check</button>
        </div>
    )
}
export default Game;
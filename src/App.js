import React from 'react';
import './App.css';
import Game from './Components/Game';
class App extends React.Component
{
  render()
  {
    return(
      <div>
      <h1>Tic Tac Toe</h1> 
      <Game/>
      </div>
    )
  }
}
export default App;

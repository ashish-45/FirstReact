import React from 'react';
import Square from './Square';
class Board extends React.Component{
    renderSquare(i) {
        return <Square value={i}/>;
      }    
    render()
    {
        const status='next player: X';
        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.rendersquare(0)}
                    {this.rendersquare(1)}
                    {this.rendersquare(2)}
                </div>
                <div className="board-row">
                    {this.rendersquare(3)}
                    {this.rendersquare(4)}
                    {this.rendersquare(5)}
                </div>
                <div className="board-row">
                    {this.rendersquare(6)}
                    {this.rendersquare(7)}
                    {this.rendersquare(8)}
                </div>
            </div>
        )
    }
}
export default Board;
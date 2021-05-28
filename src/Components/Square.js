import React from 'react';
import Game from './Game';
class square extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            value:null,
        };
    }
    render()
    {
        return(
            <div>
            <button className="square"
            onClick={()=>this.setState({value:'x'})}>
                {this.state.value}
            </button>
            <Game/>
            </div>
        )
    }
}
export default square;
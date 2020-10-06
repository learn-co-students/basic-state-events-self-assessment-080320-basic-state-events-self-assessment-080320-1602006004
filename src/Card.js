import React, { Component } from 'react';
import { yes, no } from './Statement'



class Card extends Component {

    state = {
        yes: yes,
        no: no,
        clicked: false
    }
    
    clickHandler = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }))
    }


    render() {
        return (
           <div className="container" onClick={this.clickHandler}>
               {this.state.clicked?
               <>
                    <h1>{this.state.yes["yes-statement"]}</h1>
                    <img alt="" src={this.state.yes["yes-image"]} />
                </>
                :
                <>
                    <h1>{this.state.no["no-statement"]}</h1>
                    <img alt="" src={this.state.no["no-image"]} />
                </>
            }
           </div>
        )
    }
}

export default Card;


import React, { Component } from 'react';
import { statements } from './Statement'
import Display from './Display'


class Card extends Component {
    
    showDisplays = () => {
        return (statements.map(obj => <Display key={obj.type} card={obj}/>))
    }
    

    render() {
        console.log(this.showDisplays());
        return (
           <div>
               {this.showDisplays()}
           </div>
        )
    }
}

export default Card;


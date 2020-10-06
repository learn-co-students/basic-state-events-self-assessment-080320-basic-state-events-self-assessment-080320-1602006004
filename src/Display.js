import React, { Component } from 'react';


class Display extends Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState((prevState) => ({clicked: !prevState.clicked}))
        console.log(this.state)
    }
    
    render() {

        return (
           <div>
                <h1>{this.props.card.statement}</h1>
                <img onClick={this.handleClick} alt={this.props.card.statement} src={this.props.card.image}/>
           </div>
        )
    }
}

export default Display;
import React from "react";
import {yes, no} from "../objects"

class Card extends React.Component {

    state = {
        clicked: true
    }
    
    clickHandler = (e) => {
        if (this.state.clicked === true) {
            this.setState((prevState) => ({ clicked: !prevState.clicked }))
        } if (this.state.clicked === false) {
            this.setState((prevState) => ({ clicked: !prevState.clicked }))
        }
    }

    render() {
        if (this.state.clicked === true) {
            return (
                <div>
                    <h1>{yes.statement}</h1>
                    <img src={yes.image} onClick={this.clickHandler}></img>
                </div>
            )
        
        } if (this.state.clicked === false) {
            return (
                <div>
                    <h1>{no.statement}</h1>
                    <img src={no.image} onClick={this.clickHandler}></img>
                </div>
            )
        }
        
    }
}

export default Card
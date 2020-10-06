import React from 'react'
import './App.css';


class Card extends React.Component {
    state = {
        clicked: false
    }

    clickHandler = () => {
        this.setState((prevState => {
            return {
                clicked: !prevState.clicked
            }
        }))
    }

    getImage = () => {
        if (this.state.clicked){
            return this.props.cardSides[1]['no-image']
        } else {
            return this.props.cardSides[0]['yes-image']
        }
    }

    getStatement = () => {
        if (this.state.clicked){
            return this.props.cardSides[1]['no-statement']
        } else {
            return this.props.cardSides[0]['yes-statement']
        }
    }

    render(){
            return <div className="App App-header">
                <h1>{this.getStatement()}</h1>
                <img src={this.getImage()} alt="" onClick={this.clickHandler} />
            </div>
       
    }
}

export default Card
import React from 'react'


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

    render(){
        if (this.state.clicked){
            return <div onClick={this.clickHandler}>
                <h1>{this.props.cardSides[1]['no-statement']}</h1>
                <img src={this.props.cardSides[1]['no-image']} />
            </div>
        } else {
            return <div onClick={this.clickHandler}>
                <h1>{this.props.cardSides[0]['yes-statement']}</h1>
                <img src={this.props.cardSides[0]['yes-image'] } />
            </div>
        }
    }
}

export default Card
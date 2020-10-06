import React, {Component} from 'react';
import {yes, no} from '../objects'

class ImageCard extends Component {

    state={
        canIDoThis: false,
    }

    getImageSrc = () => {
        return this.state.canIDoThis ? yes["yes-image"] : no["no-image"]
    }

    getStatement = () => {
        return this.state.canIDoThis ? yes["yes-statement"] : no["no-statement"]
    }

    changeState = () => {
        this.setState(prevState => {
        return {
            canIDoThis: !prevState.canIDoThis
        }
        })
    }


    render() {
        return (
        <React.Fragment>
            <div>
            <h1>{this.getStatement()}</h1>
            </div>
            <div>
            <img src={this.getImageSrc()} onClick={this.changeState} alt=""/>
            </div>
        </React.Fragment>
        )
    }
}

export default ImageCard



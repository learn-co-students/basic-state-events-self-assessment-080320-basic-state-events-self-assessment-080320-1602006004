import React, {Component} from 'react';
import './App.css';
import {yes, no} from './objects'

class App extends Component {

  state={
    canIDoThis: false,
    yesInfo: yes,
    noInfo: no
  }

  getImageSrc = () => {
    if(this.state.canIDoThis) {
      return this.state.yesInfo["yes-image"]
    } else {
      return this.state.noInfo["no-image"]
    }
  }

  getStatement = () => {
    if(this.state.canIDoThis) {
      return this.state.yesInfo["yes-statement"]
    } else {
      return this.state.noInfo["no-statement"]
    }
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

export default App;

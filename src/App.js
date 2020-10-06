import React, { Component } from 'react';
import './App.css';
import { yes, no } from './objects.js'


class App extends Component {

  state = {
      yes: {
        yesStatement: yes["yes-statement"],
        yesImage: yes["yes-image"]
  
      },
    no: {
      noStatement: no["no-statement"],
      noImage: no["no-image"],
    }
  }

  clickHandler = () => {
    this.setState()
  }


  render() {
    return( 
      <div>
        <h1>{this.state.yes.yesStatement}</h1>
        <img onClick={this.clickHandler} src={this.state.yes.yesImage}></img>
      </div>
    );
  }
}

export default App;

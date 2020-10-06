import React, { Component } from 'react';
import './App.css';
import { yes, no } from './objects.js'


class App extends Component {

  state = {
    yesStatement: yes["yes-statement"],
    yesImage: yes["yes-image"],
    noStatement: no["no-statement"],
    noImage: no["no-image"],
  }

  clickHandler = () => {

  }


  render() {
    return( 
      <div>
        <h1>{this.state.yesStatement}</h1>
        <img onClick={this.clickHandler} src={this.state.yesImage}></img>
      </div>
    );
  }
}

export default App;

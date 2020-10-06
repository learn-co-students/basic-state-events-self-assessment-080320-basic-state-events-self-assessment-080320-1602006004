import React from 'react';
import './App.css';
import {yes, no} from './objects'

class App extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((prevState) => ({clicked: !prevState.clicked}))
  }

  // function to remove image and header

  render () {
    return (
      <div>
        <h2>{no["no-statement"]}</h2>
        <img onClick={this.clickHandler} src={no["no-image"]}></img>
      {this.state.clicked ?
      // invoke remove function
      <h2>{yes["yes-statement"]}</h2> : null 
      }
      {this.state.clicked ?
      // invoke remove function
      <img onClick={this.clickHandler} src={yes["yes-image"]}></img> : null
      }
      </div>
    )
  }

}

export default App;

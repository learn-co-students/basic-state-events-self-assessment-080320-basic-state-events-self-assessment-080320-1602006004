import React from 'react';
import './App.css';
import {yes, no} from './objects'

class App extends React.Component{

  state = {
    clicked: true
  }

  clickHandler = () => {

    this.setState((prevState) =>({clicked:
    !prevState.clicked}))
  }

render() {
  return(
    <>
    <h2> {no["no-statement"]}  </h2>
    <img src={no["no-image"]} onClick={this.clickHandler}/>
    {this.state.clicked ? 
    <>
    <h2> {yes["yes-statement"]} </h2> 
    <img src={yes["yes-image"]} /> 
    </>
    : null}
    </>
    )
  }
}

export default App;

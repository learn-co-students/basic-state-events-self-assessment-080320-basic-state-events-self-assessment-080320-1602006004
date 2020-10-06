import React from 'react';
import './App.css';
import { yes, no } from './objects'

class App extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((prevState) => ({clicked: !prevState.clicked}))
  }

  render() {
    console.log ({ yes, no })
    return (
    <div className="container" onClick={this.clickHandler}>
    <div className="statement">{this.state.clicked ? <h2>{yes.statement}</h2> : <h2>{no.statement}</h2>}</div>;
    <div className="image">{this.state.clicked ? <img src={yes.image} alt=""/> : <img src={no.image} alt=""/>}</div>;
    </div>
    )
  }
}

export default App;

import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import { yes, no } from './objects'


class App extends Component {
  state = {
    responses: { yes, no },
    clicked: true
  }
  
  clickHandler = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }))
  }
  
  
  
  
  render() {
  return (
    <div className="card">
    {this.state.clicked ?  <h1>{this.state.responses.yes["yes-statement"]}</h1> : <h1>{this.state.responses.no["no-statement"]}</h1>}
    {this.state.clicked ? <img alt="" src={this.state.responses.yes['yes-image']} onClick={this.clickHandler}></img> : <img alt="" src={this.state.responses.no['no-image']} onClick={this.clickHandler}></img>}
    </div>
  )

}
}

export default App;

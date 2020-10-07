import React from 'react';
import './App.scss';
import { yes, no } from './objects'

class App extends React.Component {

  state = {
    clicked: false
  }

  clickerHandler = () => {
    this.setState((currentState) => ({ clicked: !currentState.clicked }))
  }

  render () {
    console.log(!!this.state.clicked)
    if(!!this.state.clicked)
    return <h1>You Can Do This!</h1>,
    <div className="artist-card" onClick={this.clickerHandler}>
      <h2 className='artist-card__title'>{{yes, no}.yes["yes-statement"]}</h2>
      <img className='artist-card__img' src={{yes}.yes["yes-image"]}/>
    </div>
    else
      {return <h1>You Can Do This!</h1>,
        <div className="artist-card" onClick={this.clickerHandler}>
          <h2 className='artist-card__title'>{{yes, no}.no["no-statement"]}</h2>
          <img className='artist-card__img' src={{no}.no["no-image"]}/>
        </div>}
    // <span onClick = {this.clickerHandler}>
    //   <img src={yes}/>
    // </span>;
  }
}

export default App;

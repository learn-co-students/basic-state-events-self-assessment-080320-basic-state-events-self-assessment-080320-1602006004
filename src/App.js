import React from 'react';
import './App.css';
import { yes, no } from './objects'

class App extends React.Component {

  state = {
    yes: yes,
    no: no,
    clicked: false
  }

  clickHandler = () => {
    this.setState((prevState) => ({clicked: !this.state.clicked}))
  }

  render() {
    // console.log(yes, no)
  return ( 
   <div onClick={this.clickHandler}>
     {this.state.clicked ? 
     <>
     <h1>Statement: {this.state.yes['yes-statement']}</h1>
     <img src={this.state.yes['yes-image']}/>
      </>

     : <>
     <h1>Statement: {this.state.no['no-statement']}</h1>
     <img src={this.state.no['no-image']}/>
     </>
    }
    </div>
  )
  }
}

export default App;

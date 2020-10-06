import React from 'react';
import './App.css';
import { yes, no } from './objects'

class App extends React.Component {

  state = {
    Image: no,
    Statement: 'no'
  }

  clickHandler = () => {

  }

  render() {
    // console.log(yes, no)
  return ( 
   <div>
     <h1>Statement: {this.state.Statement}</h1>
     <img image         />
   </div>
    
  );
  }
}

export default App;

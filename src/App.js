import React from 'react';
import { render } from 'react-dom';
import './App.css';
import {yes, no} from './objects'

class App extends React.Component {

    state={
      hasBeenClicked:false
    }

    clickChanger = () => {
      
        this.setState((previousState)=> {return{hasBeenClicked:!previousState.hasBeenClicked}});
        

      }

    

    render(){
      return (
        <div className='App-header' onClick={this.clickChanger}>
            <span className ='header'>
      {this.state.hasBeenClicked? <h2>{yes["yes-statement"]}</h2>:<h2> {no["no-statement"]}</h2>}
          </span>
       <span className='image'>
         
         {this.state.hasBeenClicked? <img src={yes["yes-image"]}/>: <img src={no["no-image"]}/>}
       </span>
        </div>
      )
    }
    
  }




export default App

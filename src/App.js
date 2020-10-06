import React from 'react'
import './App.css'
import { yes, no } from './objects'

class App extends React.Component {
  state={
    yesNoObj: yes,
    yesNoString: 'yes'
  }

  changeYes = () => {
    this.setState((prevState) => {
      if(prevState.yesNoString === 'yes'){
        return {
          yesNoObj: no,
          yesNoString: 'no'
        }
      }else{
        return {
          yesNoObj: yes,
          yesNoString: 'yes'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.yesNoObj[`${this.state.yesNoString}-statement`]}</h1>
        <img src={this.state.yesNoObj[`${this.state.yesNoString}-image`]} alt='' onClick={this.changeYes}/>
      </div>
    )
  }
}

export default App